import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { TopicCard } from "../components/TopicCard";
import Grid from "@mui/material/Grid";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(({ data }) => {
        setTopics(data.topics);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (isLoading) return <p>...is Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {topics &&
        topics.map((topic) => (
          <Grid item xs={4} sm={4} md={4} key={topic.slug}>
            <TopicCard topic={topic} />
          </Grid>
        ))}
    </Grid>
  );
};
