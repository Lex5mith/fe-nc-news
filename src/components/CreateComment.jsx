import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";
import { Typography } from "@mui/material";

export const CreateComment = ({ setArticleComments }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { article_id: article_id_from_params } = useParams();
  const { user } = useContext(UserContext);

  const handleTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = () => {
    if (article_id_from_params && user.username && commentText) {
      // optimistc rendering stuff
      // put comment into state, so that UI updates automatically
      setArticleComments((prevComments) => {
        return [
          {
            comment_id: 99999,
            body: commentText,
            article_id: article_id_from_params,
            author: user.username,
            votes: 0,
            createdAt: new Date(),
          },
          ...prevComments,
        ];
      });

      // send new comment to api, to update DB
      // if user refreshes page, all comments will be loaded from api
      setIsError(false);
      setIsLoading(true);
      postComment(article_id_from_params, user.username, commentText)
        .then((data) => {
          setShowCommentInput(!showCommentInput);
          setIsLoading(false);
          setCommentText("");
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error);
        });
    }
  };

  return (
    <>
      <Stack direction="column" spacing={2} sx={{ paddingBottom: "1em" }}>
        {showCommentInput === false && (
          <Button
            variant="contained"
            sx={{ maxWidth: "15em", alignSelf: "center" }}
            endIcon={<CommentIcon />}
            onClick={() => setShowCommentInput(!showCommentInput)}
          >
            Add Comment
          </Button> 
        )}
        
        {showCommentInput && user.username && (
          <>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Tell me your secrets..."
              id="fullWidth"
              value={commentText}
              onChange={handleTextChange}
            />
            <Button
              sx={{ maxWidth: "25em", alignSelf: "center" }}
              variant="contained"
              endIcon={<CommentIcon />}
              onClick={handleSubmitComment}
            >
              Share your Thoughts
            </Button>
            
          </>
        )}
        {showCommentInput && !user.username && (
          <Typography
            sx={{ color: "tomato", alignSelf: "center" }}
            variant="h5"
          >
            Please <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                >login</Link> to post a comment
          </Typography>
        )}
      </Stack>
    </>
  );
};
