// src/Protected.jsx
import { useEffect, useState } from 'react';

function Protected({ token, onLogout }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/protected', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setMessage('Access denied');
          onLogout();
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage('Error fetching data');
        onLogout();
      });
  }, [token, onLogout]);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Protected;
