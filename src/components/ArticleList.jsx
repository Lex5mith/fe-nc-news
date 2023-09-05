import { useEffect, useState, useContext } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import Grid from "@mui/material/Grid";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("use effect running");
    setIsLoading(true);
    getArticles()
      .then(({ data }) => {
        console.log(data, "<<<<data in list");
        setArticles(data.articles);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (articles) {
    console.log(articles)
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map((article) => (
          <Grid item xs={4} sm={4} md={4} key={article.article_id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    );
  }
};
