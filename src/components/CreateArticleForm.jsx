import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { postArticle } from "../api";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import { UserContext } from "../contexts/User";

export const CreateArticleForm = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleImageURL, setArticleImageURL] = useState("");
  const [articleTopic, setArticleTopic] = useState("");

  const handleArticleTitleChange = (event) => {
    setArticleTitle(event.target.value);
  };

  const handleArticleContentChange = (event) => {
    setArticleContent(event.target.value);
  };

  const handleArticleImageURLChange = (event) => {
    setArticleImageURL(event.target.value);
  };

  const handleArticleTopicChange = (event) => {
    setArticleTopic(event.target.value);
  };

  console.log({
    user: user.username,
    articleTitle,
    articleContent,
    articleImageURL,
    articleTopic,
  });

  const handleArticleSubmit = () => {
    if (
      user.username &&
      articleTitle &&
      articleContent &&
      articleImageURL &&
      articleTopic
    ) {
      // post article
      postArticle({
        author: user.username,
        title: articleTitle,
        body: articleContent,
        topic: articleTopic,
        article_img_url: articleImageURL,
      })
        .then(({ data }) => {
          // reset form state
          setArticleTitle("");
          setArticleContent("");
          setArticleImageURL("");
          setArticleTopic("");
          // navigate the user to the newly created article
          navigate(`/articles/${data.newArticle.article_id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "100%",
      }}
    >
      {!user.username ? (
        <Typography sx={{ color: "tomato", alignSelf: "center" }} variant="h5">
          Please <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                >login</Link> to create an article
        </Typography>
      ) : (
        <Box
          component="form"
          //   noValidate
          //   autoComplete="off"
          //   sx={{
          //     // padding: "2em",
          //     display: "flex",
          //     flexDirection: "column",
          //     alignItems: "center",
          //     justifyContent: "center",
          //     width: "80%",
          //     height: "100%",
          //   }}
        >
          <Typography variant="h4">Create a new Article</Typography>
          <TextField
            error={!articleTitle}
            fullWidth
            label="Article Title"
            id="article_title"
            sx={{
              marginTop: "1em",
            }}
            placeholder="something new..."
            value={articleTitle}
            onChange={handleArticleTitleChange}
          />
          <TextField
          error={!articleContent}
            fullWidth
            multiline
            rows={4}
            label="Article Content"
            id="article_content"
            placeholder="something new..."
            sx={{
              marginTop: "1em",
            }}
            value={articleContent}
            onChange={handleArticleContentChange}
          />
          <TextField
          error={!articleTopic}
            fullWidth
            label="Image URL"
            id="article_img_url"
            placeholder="something new..."
            sx={{
              marginTop: "1em",
            }}
            value={articleImageURL}
            onChange={handleArticleImageURLChange}
          />
          <Select
            sx={{ minWidth: "10em", marginTop: "1em" }}
            labelId="article_topic"
            id="article_topic_select"
            value={articleTopic}
            label="Topic"
            placeholder="Topic"
            onChange={handleArticleTopicChange}
          >
            <MenuItem value="football">Football</MenuItem>
            <MenuItem value="coding">Coding</MenuItem>
            <MenuItem value="cooking">Cooking</MenuItem>
          </Select>
          <Button
            sx={{ maxWidth: "25em", alignSelf: "center", marginTop: "1em" }}
            variant="contained"
            endIcon={<CommentIcon />}
            onClick={handleArticleSubmit}
          >
            Create new article
          </Button>
        </Box>
      )}
    </Paper>
  );
};
