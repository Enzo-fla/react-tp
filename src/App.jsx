import { useAuth } from './states/authState.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import './App.css';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <Posts /> : <Login />}
    </div>
  );
}

export default App;
