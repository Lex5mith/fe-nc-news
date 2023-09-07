import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

import { CommentCard } from "../components/CommentCard";

export const CommentList = ({ articleComments, setArticleComments }) => {

    const handleDeleteCommentClick = () => {
        if (user.username === comment.author) {
                
        }
      };

  return (
    <>
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
    </>
  );
};
