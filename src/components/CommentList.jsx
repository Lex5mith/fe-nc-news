import { useContext } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { UserContext } from "../contexts/User";
import { CommentCard } from "../components/CommentCard";
import { deleteComment } from "../api";

export const CommentList = ({ articleComments, setArticleComments }) => {
  const { user } = useContext(UserContext);

  const handleDeleteCommentClick = (author, id) => {
    if (user.username === author) {
      // do api call to delete comment
      // setArticleComments()  <--- all comments, except the one we tried to delete
      const commentsWithOneDeleted = articleComments.filter(
        (comment) => comment.comment_id !== id
      );
      // this feels hacky
      setArticleComments((prev) => {
        return commentsWithOneDeleted;
      });
      deleteComment({ comment_id: id }).then((data) =>
        console.log("deleted comment: ", data)
      );
    } else {
      console.log("Your are not authorised to delete this comment");
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
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            handleDeleteCommentClick={handleDeleteCommentClick}
          />
        ))}
    </>
  );
};
