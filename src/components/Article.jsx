import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { patchVotes } from "../api";

export const Article = ({
  article_id,
  article_img_url,
  created_at,
  topic,
  title,
  author,
  votes,
  authorOfArticle,
  body,
  updateVotes,
}) => {
  return (
    <>
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
        <Typography
          variant="h5"
          color="text.primary"
          sx={{ fontWeight: "medium", lineHeight: 2, textAlign: "right" }}
        >
          Votes: {votes}
        </Typography>
        <Button
          onClick={() => {
            patchVotes({
              article_id: article_id,
              inc_votes: 1,
            });
            updateVotes(1);
          }}
        >
          <ThumbUpIcon />
        </Button>
        <Button
          onClick={() => {
            patchVotes({
              article_id: article_id,
              inc_votes: -1,
            });
            updateVotes(-1);
          }}
        >
          <ThumbDownIcon />
        </Button>
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
    </>
  );
};
