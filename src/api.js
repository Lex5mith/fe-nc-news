import axios from "axios";

export const getArticles = () => {
  return axios.get("https://lexs-nc-news.onrender.com/api/articles");
};

export const getSingleArticle = (article_id) => {
  return axios.get(
    `https://lexs-nc-news.onrender.com/api/articles/${article_id}`
  );
};

export const getUsers = () => {
  return axios.get(`https://lexs-nc-news.onrender.com/api/users`);
};

export const postComment = (article_id, username, articleText) => {
  return axios.post(
    `https://lexs-nc-news.onrender.com/api/articles/${article_id}/comments`,
    {
      username: username,
      body: articleText,
    }
  );
};

export const getComments = (article_id) => {
  return axios.get(
    `https://lexs-nc-news.onrender.com/api/articles/${article_id}/comments`
  );
};
