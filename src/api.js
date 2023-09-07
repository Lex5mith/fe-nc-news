import axios from "axios";

export const getArticles = ({ sortBy, orderBy }) => {
  console.log({ sortBy, orderBy });
  let query = "";
  if (sortBy) {
    query = query.concat(`sort_by=${sortBy}&`);
  }
  if (orderBy) {
    query = query.concat(`order=${orderBy}&`);
  }

  return axios.get(`https://lexs-nc-news.onrender.com/api/articles?${query}`);
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

export const postArticle = ({
  author,
  title,
  body,
  topic,
  article_img_url,
}) => {
  return axios.post(`https://lexs-nc-news.onrender.com/api/articles`, {
    author: author,
    title: title,
    body: body,
    topic: topic,
    article_img_url: article_img_url,
  });
};

export const getTopics = () => {
  return axios.get("https://lexs-nc-news.onrender.com/api/topics");
};
