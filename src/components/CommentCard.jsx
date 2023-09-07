import { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import moment from "moment";

import { UserContext } from "../contexts/User";
import { deleteComment } from "../api";

export const CommentCard = ({ comment, setCommentDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { user } = useContext(UserContext);

  console.log(comment, "<<<<<");

  const handleDeleteCommentClick = () => {
    if (user.username === comment.author) setIsDeleting(true);
  };

  useEffect(() => {
    if (isDeleting) {
      (async () => {
        try {
          await deleteComment({ comment_id: comment.comment_id });
          setIsDeleting(false);
          setCommentDeleted(true);
        } catch (err) {
          console.log(err);
          setIsDeleting(false);
        }
      })();
    }
  }, [isDeleting, comment.comment_id, setCommentDeleted]);

  return (
    <Card sx={{ minHeight: "5em", padding: "1em", marginBottom: "1em" }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {comment.author}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {moment(comment.created_at).fromNow()}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {comment.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="vote">
          <ThumbsUpDownIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteCommentClick}>
          <DeleteSweepIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
