import React from 'react';
import useFetch from '../hooks/useFetch.js';

function Users() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Chargement des utilisateurs...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
