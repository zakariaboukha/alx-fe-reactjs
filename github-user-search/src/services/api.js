import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

export const fetchUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
