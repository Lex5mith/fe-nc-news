import { useEffect, useState, useContext } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import Grid from "@mui/material/Grid";

export const ArticleList = ({
  topicFilter,
  dateSortDirection,
  commentCountSortDirection,
  votesSortDirection,
}) => {
  const [articles, setArticles] = useState([]);
  const [sortedAndFilteredArticles, setSortedAndFilteredArticles] = useState(
    []
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // useEffect(() => {
  //   if (articles) {
  //     console.log(articles);
  //     let filtered = articles;

  //     if (topicFilter) {
  //       filtered = filtered.filter((article) => article.topic === topicFilter);
  //     }

  //     if (dateSortDirection === "asc") {
  //       filtered = filtered.sort(
  //         (a, b) => new Date(a.created_at) - new Date(b.created_at)
  //       );
  //     }

  //     if (dateSortDirection === "desc") {
  //       filtered = filtered.sort(
  //         (a, b) => new Date(b.created_at) - new Date(a.created_at)
  //       );
  //     }
  //     if (
  //       // if votes
  //       votesSortDirection === "asc"
  //     ) {
  //       filtered = filtered.sort((a, b) => a.votes - b.votes);
  //     }

  //     if (votesSortDirection === "desc") {
  //       filtered = filtered.sort((a, b) => b.votes - a.votes);
  //     }
  //     // if comment count
  //     if (commentCountSortDirection === "asc") {
  //       filtered = filtered.sort((a, b) => a.comment_count - b.comment_count);
  //     }

  //     if (commentCountSortDirection === "desc") {
  //       filtered = filtered.sort((a, b) => b.comment_count - a.comment_count);
  //     }
  //     setSortedAndFilteredArticles(filtered);
  //   }
  // }, [
  //   articles,
  //   topicFilter,
  //   dateSortDirection,
  //   commentCountSortDirection,
  //   votesSortDirection,
  // ]);

  if (isLoading) return <p>...is Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {articles &&
        articles.map((article) => (
          <Grid item xs={4} sm={4} md={4} key={article.article_id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
    </Grid>
  );
};
