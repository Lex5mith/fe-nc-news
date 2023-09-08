import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { getUsers, getSingleArticle, getComments, patchVotes } from "../api";
import { CreateComment } from "../components/CreateComment";
import { CommentList } from "../components/CommentList";
import { Article } from "../components/Article";

export const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [authorOfArticle, setAuthorOfArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { article_id: article_id_from_params } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id_from_params)
      .then(({ data }) => {
        setSingleArticle(data.article);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, [article_id_from_params]);

  useEffect(() => {
    if (singleArticle) {
      setIsLoading(true);
      getUsers().then(({ data }) => {
        const { users } = data;
        const author = users.filter(
          (user) => user.username === singleArticle.author
        );
        setAuthorOfArticle(author[0]);
        setIsLoading(false);
        setIsError(false);
      });
    }
  }, [singleArticle]);

  useEffect(() => {
    if (singleArticle.article_id) {
      setIsLoading(true);
      getComments(singleArticle.article_id).then(({ data }) => {
        const { comments } = data;

        setArticleComments(comments);
        setIsLoading(false);
        setIsError(false);
      });
    }
  }, [singleArticle]);

  const {
    article_id,
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = singleArticle;

  // console.log("singleArticle:: ", singleArticle);

  const updateVotes = (votes) => {
    // let currVotes = votes;
    // console.log(singleArticle.votes)
    // currVotes += 1;

    setSingleArticle((prevArticle) => {
      return {
        ...prevArticle,
        votes: prevArticle.votes + votes,
      };
    });
    patchVotes({
      article_id: singleArticle.article_id,
      vote: votes,
    });
  };

  if (isLoading) return <p>...is Loading</p>;
  if (isError) return <p>{isError}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1080,
          height: 1080,
          textAlign: "left",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Change the size to fit the parent element of this div
          width: "100%",
          height: "100%",
        }}
      >
        <Paper elevation={3} sx={{ padding: "2em" }}>
          <Article
            article_id={article_id}
            article_img_url={article_img_url}
            created_at={created_at}
            topic={topic}
            votes={votes}
            title={title}
            author={author}
            authorOfArticle={authorOfArticle}
            body={body}
            updateVotes={updateVotes}
          />

          <CreateComment
            articleComments={articleComments}
            setArticleComments={setArticleComments}
          />

          <Divider
            sx={{
              bgcolor: "secondary.dark",
              lineHeight: 3,
              display: "flex",
              flexDirection: "row",
              alignContent: "baseline",
            }}
            variant="middle"
          />

          <CommentList
            articleComments={articleComments}
            setArticleComments={setArticleComments}
          />
        </Paper>
      </div>
    </Box>
  );
};
