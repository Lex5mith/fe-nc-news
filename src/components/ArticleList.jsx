import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import Grid from "@mui/material/Grid";

export const ArticleList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles({ sortBy: sortByQuery, orderBy: orderQuery })
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [sortByQuery, orderQuery]);

  if (isLoading) return <p>...is Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {/*  can this be refactored into one return somehow? */}
      {articles &&
        !topicQuery &&
        articles.map((article) => (
          <Grid item xs={4} sm={4} md={4} key={article.article_id}>
            <ArticleCard article={article} />
          </Grid>
        ))}

      {articles &&
        topicQuery &&
        articles
          .filter((article) => article.topic === topicQuery)
          .map((article) => (
            <Grid item xs={4} sm={4} md={4} key={article.article_id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
    </Grid>
  );
};
