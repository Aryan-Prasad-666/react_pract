import { useState } from 'react';
import Protected from './components/Protected';
import Login from './components/login';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div>
      <h1>Flask + React JWT Auth</h1>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Protected token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
