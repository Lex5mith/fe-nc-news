import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ArticleList } from "../components/ArticleList";
import { SortBar } from "../components/SortBar";
export const Home = () => {
  /**
   * query params
   * query string
   * react-router-dom
   *
   * assign topicFilter to state
   */
  const [searchParams, setSearchParams] = useSearchParams();
  const [topicFilter, setTopicFilter] = useState("");
  const [dateSortDirection, setDateSortDirection] = useState("");
  const [commentCountSortDirection, setCommentCountSortDirection] =
    useState("");
  const [votesSortDirection, setVotesSortDirection] = useState("");

  const topicQuery = searchParams.get("topic");

  const handleSortByDate = () => {
    setCommentCountSortDirection("");
    setVotesSortDirection("");
    if (dateSortDirection === "") {
      setDateSortDirection("asc");
    }
    if (dateSortDirection === "asc") {
      setDateSortDirection("desc");
    }
    if (dateSortDirection === "desc") {
      setDateSortDirection("asc");
    }
  };
  const handleSortByCommentCount = () => {
    setDateSortDirection("");
    setVotesSortDirection("");
    if (commentCountSortDirection === "") {
      setCommentCountSortDirection("asc");
    }
    if (commentCountSortDirection === "asc") {
      setCommentCountSortDirection("desc");
    }
    if (commentCountSortDirection === "desc") {
      setCommentCountSortDirection("asc");
    }
  };
  const handleSortByVotes = () => {
    setDateSortDirection("");
    setCommentCountSortDirection("");
    if (votesSortDirection === "") {
      setVotesSortDirection("asc");
    }
    if (votesSortDirection === "asc") {
      setVotesSortDirection("desc");
    }
    if (votesSortDirection === "desc") {
      setVotesSortDirection("asc");
    }
  };

  console.log({
    dateSortDirection,
    votesSortDirection,
    commentCountSortDirection,
  });

  useEffect(() => {
    if (topicQuery) {
      setTopicFilter(topicQuery);
    }
  }, [topicQuery]);

  console.log(topicQuery);
  return (
    <>
      <SortBar
        handleSortByDate={handleSortByDate}
        handleSortByCommentCount={handleSortByCommentCount}
        handleSortByVotes={handleSortByVotes}
        dateSortDirection={dateSortDirection}
        commentCountSortDirection={commentCountSortDirection}
        votesSortDirection={votesSortDirection}
      />
      <ArticleList
        topicFilter={topicFilter}
        dateSortDirection={dateSortDirection}
        commentCountSortDirection={commentCountSortDirection}
        votesSortDirection={votesSortDirection}
      />
    </>
  );
};
