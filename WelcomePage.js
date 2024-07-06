import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div>
    <div className="welcome-container">
      
      <div className="left-section">
        <h1>PixVibe Website</h1>
        <p>"Capture the moments, share the stories. Your world in every frame."</p>
      </div>
      <div className="right-section">
        <button className="btn" onClick={handleSignupClick}>Sign Up</button>
        <button className="btn" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;
