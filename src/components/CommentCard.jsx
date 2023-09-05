import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import moment from "moment";
import { minHeight } from "@mui/system";

export const CommentCard = ({ comment }) => {
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
        <IconButton aria-label="share">
          <ThumbsUpDownIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
