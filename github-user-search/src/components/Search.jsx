import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1); // Added state for pagination

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(1); // Reset to first page when a new search is initiated

    const queryParts = [];
    if (searchTerm) queryParts.push(`user:${searchTerm}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    const query = queryParts.join(' ');

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1`
      );
      setUsers(response.data.items);
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch the next page of results
  const handleNextPage = async () => {
    setLoading(true);
    setError('');

    const queryParts = [];
    if (searchTerm) queryParts.push(`user:${searchTerm}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    const query = queryParts.join(' ');

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page + 1}`
      );
      setPage(page + 1); // Increment the page
      setUsers((prevUsers) => [...prevUsers, ...response.data.items]); // Append new results
    } catch (err) {
      setError('An error occurred while fetching the next page.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="mt-4 text-center">Loading...</p>}

      {/* Error State */}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {/* User Results */}
      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded shadow flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg">{user.login}</h3>
              {user.location && <p className="text-sm">📍 {user.location}</p>}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Button */}
      {users.length > 0 && !loading && (
        <button
          onClick={handleNextPage}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};
["Looks like we cant find the user"]
export default Search;
