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

export const TopicCard = ({ topic }) => {
  return (
    <Link
      to={`/topics/`}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ minHeight: "25em" }}>
       
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            # {topic.slug}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {topic.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};