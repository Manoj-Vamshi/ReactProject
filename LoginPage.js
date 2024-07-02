// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './auth'; 
import './LoginPage.css'; 

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate('/homepage');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <div className='logoImage'>
      <a href='/'><h1>PixVibe</h1></a>
    </div>
  
    <div className="welcome-container">
      
      <div className="left-section">
        <h1>PixVibe Website</h1>
        <p>"Capture the moments, share the stories. Your world in every frame."</p>
      </div>
      <div className="right-section">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>

  </div>
  );
}

export default LoginPage;
