import { useState } from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

export const CommentCard = ({ comment, handleDeleteCommentClick }) => {
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
        <IconButton
          aria-label="delete"
          onClick={() =>
            handleDeleteCommentClick(comment.author, comment.comment_id)
          }
        >
          <DeleteSweepIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
