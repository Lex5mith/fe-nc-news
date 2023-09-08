import axios from "axios";

const baseURL = `https://lexs-nc-news.onrender.com/api`;
// const baseURL = `http://localhost:9090/api`;

export const getArticles = ({ sortBy, orderBy, topic }) => {
  let query = "";
  if (sortBy) {
    query = query.concat(`sort_by=${sortBy}&`);
  }
  if (orderBy) {
    query = query.concat(`order=${orderBy}&`);
  }
  if (topic) {
    query = query.concat(`topic=${topic}&`);
  }

  return axios.get(`${baseURL}/articles?${query}`);
};

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`);
};

export const getUsers = () => {
  return axios.get(`${baseURL}/users`);
};

export const postComment = (article_id, username, articleText) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, {
    username: username,
    body: articleText,
  });
};

export const getComments = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`);
};

export const postArticle = ({
  author,
  title,
  body,
  topic,
  article_img_url,
}) => {
  return axios.post(`${baseURL}/articles`, {
    author: author,
    title: title,
    body: body,
    topic: topic,
    article_img_url: article_img_url,
  });
};

export const patchVotes = ({ article_id, vote }) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: vote });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`);
};

export const deleteComment = ({ comment_id }) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
