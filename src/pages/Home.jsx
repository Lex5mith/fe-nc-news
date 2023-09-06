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
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setSortOrder = (direction) => {
    // copy existing queries to avoid mutation
    const newParams = new URLSearchParams(searchParams);
    // set the order query
    newParams.set('order', direction);
    setSearchParams(newParams);
  };


  const handleSortByDate = () => {
    setCommentCountSortDirection("");
    setVotesSortDirection("");
    if (dateSortDirection === "") {
      setDateSortDirection("asc");
      searchParams.set("sort_by", "created_at");
      searchParams.set("order", "asc");
    }
    if (dateSortDirection === "asc") {
      setDateSortDirection("desc");
      searchParams.set("sort_by", "created_at");
      searchParams.set("order", "desc");
    }
    if (dateSortDirection === "desc") {
      setDateSortDirection("asc");
      searchParams.set("sort_by", "created_at");
      searchParams.set("order", "asc");
    }
  };

  const handleSortByCommentCount = () => {
    setDateSortDirection("");
    setVotesSortDirection("");
    if (commentCountSortDirection === "") {
      setCommentCountSortDirection("asc");
      searchParams.set("sort_by", "votes");
      searchParams.set("order", "asc");
    }
    if (commentCountSortDirection === "asc") {
      setCommentCountSortDirection("desc");
      searchParams.set("sort_by", "votes");
      searchParams.set("order", "desc");
    }
    if (commentCountSortDirection === "desc") {
      setCommentCountSortDirection("asc");
      searchParams.set("sort_by", "votes");
      searchParams.set("order", "asc");
    }
  };

  const handleSortByVotes = () => {
    setDateSortDirection("");
    setCommentCountSortDirection("");
    if (votesSortDirection === "") {
      setVotesSortDirection("asc");
      searchParams.set("sort_by", "comment_count");
      searchParams.set("order", "asc");
    }
    if (votesSortDirection === "asc") {
      setVotesSortDirection("desc");
      searchParams.set("sort_by", "comment_count");
      searchParams.set("order", "desc");
    }
    if (votesSortDirection === "desc") {
      setVotesSortDirection("asc");
      searchParams.set("sort_by", "comment_count");
      searchParams.set("order", "asc");
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
