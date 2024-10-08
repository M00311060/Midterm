import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Hard-coded credentials
  const correctUsername = 'admin';
  const correctPassword = 'password123';

  const handleLogin = () => {
    // Check if the entered username and password are correct
    if (username === correctUsername && password === correctPassword) {
      navigate('/quiz'); // Navigate to the landing page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

  