import axios from "axios";

export const getArticles = () => {
  return axios.get("https://lexs-nc-news.onrender.com/api/articles");

};

export const getSingleArticle = (item_id) => {
  return axios.get(
    `https://lexs-nc-news.onrender.com/api/articles${article_id}`
  );
  // .then((response) => {
  //   console.log(response);
  // });
};

export const getUsers = () => {
  return axios.get(`https://lexs-nc-news.onrender.com/api/users`);
};

export const postItem = (req) => {
  return axios.post("https://lexs-nc-news.onrender.com/api/articles", req);
};