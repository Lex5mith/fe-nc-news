import { useSearchParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { borderBottomColor, borderRadius } from "@mui/system";

export const SortBar = ({ setUpdatedSearchParams }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ marginBottom: "2em", width: "90%" }}
      >
        <Button
          sx={{ width: "33.5%" }}
          onClick={
            orderQuery === "ASC"
              ? () => setUpdatedSearchParams("created_at", "DESC")
              : () => setUpdatedSearchParams("created_at", "ASC")
          }
          endIcon={
            (sortByQuery === "created_at" && orderQuery === "ASC" && (
              <ArrowUpwardIcon />
            )) ||
            (sortByQuery === "created_at" && orderQuery === "DESC" && (
              <ArrowDownwardIcon />
            )) ||
            null
          }
        >
          Date
        </Button>
        <Button
          sx={{ width: "33.5%" }}
          onClick={
            orderQuery === "ASC"
              ? () => setUpdatedSearchParams("comment_count", "DESC")
              : () => setUpdatedSearchParams("comment_count", "ASC")
          }
          endIcon={
            (sortByQuery === "comment_count" && orderQuery === "ASC" && (
              <ArrowUpwardIcon />
            )) ||
            (sortByQuery === "comment_count" && orderQuery === "DESC" && (
              <ArrowDownwardIcon />
            )) ||
            null
          }
        >
          Comments
        </Button>
        <Button
          sx={{ width: "33.5%" }}
          onClick={
            orderQuery === "ASC"
              ? () => setUpdatedSearchParams("votes", "DESC")
              : () => setUpdatedSearchParams("votes", "ASC")
          }
          endIcon={
            (sortByQuery === "votes" && orderQuery === "ASC" && (
              <ArrowUpwardIcon />
            )) ||
            (sortByQuery === "votes" && orderQuery === "DESC" && (
              <ArrowDownwardIcon />
            )) ||
            null
          }
        >
          Votes
        </Button>
      </ButtonGroup>
    </>
  );
};
