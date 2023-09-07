import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const SortBar = ({
  handleSortByDate,
  handleSortByCommentCount,
  handleSortByVotes,
  dateSortDirection,
  commentCountSortDirection,
  votesSortDirection,
}) => {
  //
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ marginBottom: "2em" }}
      >
        <Button
          onClick={handleSortByDate}
          endIcon={
            (dateSortDirection === "asc" && <ArrowUpwardIcon />) ||
            (dateSortDirection === "desc" && <ArrowDownwardIcon />) ||
            null
          }
        >
          Date
        </Button>
        <Button
          onClick={handleSortByCommentCount}
          endIcon={
            (commentCountSortDirection === "asc" && <ArrowUpwardIcon />) ||
            (commentCountSortDirection === "desc" && <ArrowDownwardIcon />) ||
            null
          }
        >
          Comments
        </Button>
        <Button
          onClick={handleSortByVotes}
          endIcon={
            (votesSortDirection === "asc" && <ArrowUpwardIcon />) ||
            (votesSortDirection === "desc" && <ArrowDownwardIcon />) ||
            null
          }
        >
          Votes
        </Button>
      </ButtonGroup>
    </>
  );
};
