import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data stays fresh for 5 seconds
    cacheTime: 300000, // Cache persists for 5 minutes (default: 5 mins)
    refetchOnWindowFocus: true, // Refetch data when window regains focus
    keepPreviousData: true, // Show the previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
