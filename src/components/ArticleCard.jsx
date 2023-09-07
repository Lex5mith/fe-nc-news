import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import CommentIcon from "@mui/icons-material/Comment";
import moment from "moment";

export const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/articles/${article.article_id}`}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ minHeight: "25em" }}>
        <CardMedia
          component="img"
          height="194"
          image={article.article_img_url}
          alt={article.title}
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {article.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            by {article.author}
          </Typography>
          <IconButton aria-label="vote">
          <ThumbsUpDownIcon />
        </IconButton>
        <Typography variant="subtitle2" color="text.secondary">
            by {article.votes}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CommentIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary">
            {moment(article.created_at).fromNow()}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
};
