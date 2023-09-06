import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { getArticles, getSingleArticle, getComments } from "../api";
import { ArticleCard } from "../components/ArticleCard";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { getUsers } from "../api";
import { CommentCard } from "../components/CommentCard";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { CreateComment } from "../components/CreateComment";

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
      {/* <Paper elevation={0} />
      <Paper /> */}
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
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="400"
            image={article_img_url}
            alt={title}
          />
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: "medium", lineHeight: 2 }}
          >
            Posted: {new Date(created_at).toLocaleDateString()}
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: "medium", lineHeight: 2 }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontWeight: "medium",
                lineHeight: 2,
                display: "flex",
                flexDirection: "row",
                alignContent: "baseline",
              }}
            >
              <Avatar
                sx={{
                  lineHeight: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "baseline",
                }}
                alt={author}
                src={authorOfArticle?.avatar_url}
              />{" "}
              by {author}
            </Typography>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ fontWeight: "medium", lineHeight: 2, textAlign: "right" }}
            >
              # {topic}
            </Typography>
          </Box>

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
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              marginTop: "2em",
              marginBottom: "2em",
              fontWeight: "normal",
              lineHeight: 2,
              textAlign: "justify",
            }}
          >
            {body}
          </Typography>

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "4rem",
              lineHeight: 3,
              paddingTop: "1em",
              paddingBottom: "0.5em",
            }}
          >
            <CommentIcon
              sx={{
                fontSize: "4rem",
                lineHeight: 3,
              }}
            />
            <Typography variant="h6" color="text.secondary">
              {articleComments.length} Comments
            </Typography>
          </Box>
          {/* //map over and for each comment on article, assign comment card.// */}
          {articleComments &&
            articleComments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
        </Paper>
      </div>
    </Box>
  );
};
