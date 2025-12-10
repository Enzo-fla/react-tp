import React, { useState } from 'react';
import { useAuth } from './states/authState.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import Users from './components/Users.jsx';
import Bitcoin from './components/Bitcoin.jsx';
import './App.css';

function App() {
  const { user, logout } = useAuth();
  const [page, setPage] = useState('posts'); // 'posts' | 'users' | 'bitcoin'

  const resetSession = () => {
    localStorage.clear();
    logout();
  };

  if (!user) return <Login />;

  return (
    <div className="App">
      <nav style={{ marginBottom: '1rem' }}>
        <button onClick={() => setPage('posts')}>Posts</button>
        <button onClick={() => setPage('users')}>Utilisateurs</button>
        <button onClick={() => setPage('bitcoin')}>Bitcoin</button>
        <button onClick={resetSession} style={{ marginLeft: '1rem' }}>Reset Session</button>
      </nav>

      {page === 'posts' && <Posts />}
      {page === 'users' && <Users />}
      {page === 'bitcoin' && <Bitcoin />}
    </div>
  );
}

export default App;
