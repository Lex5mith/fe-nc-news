import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const TopicCard = ({ topic }) => {
  return (
    <Link to={`/?topic=${topic.slug}`} style={{ textDecoration: "none" }}>
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
