import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const SEARCH_URL = 'https://api.github.com/search/users?q';

/**
 * Fetches user data by username.
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Object} - The user's GitHub data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

/**
 * Searches GitHub users based on advanced criteria.
 * @param {string} username - The GitHub username to search for (optional).
 * @param {string} location - The location to filter users by (optional).
 * @param {number} minRepos - The minimum number of repositories (optional).
 * @returns {Array} - A list of GitHub users matching the criteria.
 */
export const searchUsers = async ({ username = '', location = '', minRepos = '' }) => {
  const queryParts = [];
  if (username) queryParts.push(`user:${username}`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  try {
    const response = await axios.get(`${SEARCH_URL}${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch search results');
  }
};
