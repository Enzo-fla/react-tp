import React from 'react';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../states/authState';

function Posts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { logout } = useAuth();

  if (loading) return <p>Chargement des posts...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
