
import axios from 'axios';

const WORDPRESS_API_URL = 'https://mvpportfolio.com/wp-json/wp/v2';

export const getPosts = async () => {
  const response = await axios.get(`${WORDPRESS_API_URL}/posts`);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${WORDPRESS_API_URL}/posts/${id}`);
  return response.data;
};
