import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ArticleList } from "../components/ArticleList";
import { SortBar } from "../components/SortBar";
export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [topicFilter, setTopicFilter] = useState("");

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setUpdatedSearchParams = (sortBy, direction) => {
    // copy existing queries to avoid mutation
    const newParams = new URLSearchParams(searchParams);
    // set the order query
    newParams.set("sort_by", sortBy);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (topicQuery) {
      setTopicFilter(topicQuery);
    }
  }, [topicQuery]);

  return (
    <>
      <SortBar
        setUpdatedSearchParams={setUpdatedSearchParams}
      />
      <ArticleList
        topicFilter={topicFilter}
      />
    </>
  );
};
