import axios from 'axios';

/**
 * Function to search GitHub users based on criteria.
 * @param {Object} filters - Filters for the search.
 * @param {string} filters.username - GitHub username to search for.
 * @param {string} filters.location - Location to filter by.
 * @param {number} filters.minRepos - Minimum number of repositories to filter by.
 * @returns {Promise<Array>} - A list of GitHub users matching the criteria.
 */
export const searchGitHubUsers = async ({ username, location, minRepos }) => {
  try {
    // Build the query string
    const queryParts = [];
    if (username) queryParts.push(`user:${username}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    const query = queryParts.join(' ');

    // API endpoint for GitHub user search
    const url = `https://api.github.com/search/users?q=${query}`;

    // Fetch data from the GitHub API
    const response = await axios.get(url);

    // Return the list of users
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw new Error('Unable to fetch GitHub users. Please try again.');
  }
};
