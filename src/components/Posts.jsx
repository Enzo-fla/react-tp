import React from 'react';
import { useAuth } from '../states/authState.jsx';

function Posts() {
  const { logout } = useAuth();

  // Exemple de posts fictifs mais réalistes
  const samplePosts = [
    { id: 1, title: "Actualité Crypto", body: "Bitcoin dépasse les 50k € après une hausse impressionnante." },
    { id: 2, title: "Actualité Tech", body: "Nouvelle version de React publiée avec des fonctionnalités intéressantes." },
    { id: 3, title: "Actualité Économie", body: "CAC40 en légère hausse aujourd'hui, les marchés restent volatiles." },
    { id: 4, title: "Actualité Sport", body: "L'équipe de France remporte un match amical important." },
    { id: 5, title: "Actualité Climat", body: "Les températures mondiales continuent de surprendre les scientifiques." },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <button 
        onClick={logout} 
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', backgroundColor: '#6a0dad', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Logout
      </button>

      <h2 style={{ color: '#6a0dad', marginBottom: '1rem' }}>Posts</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {samplePosts.map((post) => (
          <li 
            key={post.id} 
            style={{ 
              marginBottom: '1rem', 
              padding: '1rem', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              backgroundColor: '#f3f0f8' 
            }}
          >
            <h3 style={{ color: '#6a0dad' }}>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
