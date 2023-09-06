import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { borderBottomColor, borderRadius } from "@mui/system";

export const SortBar = ({
  handleSortByDate,
  handleSortByCommentCount,
  handleSortByVotes,
  dateSortDirection,
  commentCountSortDirection,
  votesSortDirection,
}) => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ marginBottom: "2em", width: "90%" }}
      >
        <Button
          sx={{ width: "33.5%" }}
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
          sx={{ width: "33.5%" }}
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
          sx={{ width: "33.5%" }}
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
