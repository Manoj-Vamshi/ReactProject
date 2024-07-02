import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from './Modal';
import './WelcomePage.css';

const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: ''
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsModalOpen(false);
    navigate('/homepage');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="welcome-container">
      <div className="left-section">
        <h1>PixVibe </h1>
        <h1> Website</h1>
        <p>"Capture the moments, share the stories. Your world in every frame."</p>
      </div>
      <div className="right-section">
        <button className="btn" onClick={openModal}>Sign Up</button>
        <button className="btn" onClick={handleLoginClick}>Login</button> 
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="custom"
                name="gender"
                value="Custom"
                checked={formData.gender === 'Custom'}
                onChange={handleInputChange}
              />
              <label htmlFor="custom">Custom</label>
            </div>
          </div>
          <p className='consent'>By clicking Sign Up, you agree to our Terms, Privacy Policy, and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
          <button className="btn" type="submit">Sign Up</button>
        </form>
      </Modal>
    </div>
  );
}

export default WelcomePage;
