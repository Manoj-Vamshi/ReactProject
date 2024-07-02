import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import UpdateModal from './UpdateModal';

const Header = ({ handleFormSubmit, onLogout, onUpdateModal }) => {
  const navigate = useNavigate();
  const handleFriendsClick = () => {
    navigate('/friends');
  }
  return (
    <header className="header">
      <form onSubmit={handleFormSubmit}>
        <div className="logo">PixVibe</div>
        <nav className="nav">
          <a href="#">Feed</a>
          <a href="#" onClick={handleFriendsClick}>Friends</a>
          <a href="#" onClick={onUpdateModal}>Help</a>

        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <button type="button" className="logout-button" onClick={onLogout}>Log Out</button>
      </form>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="welcome-message">Welcome User!</div>
      <div className="image-gallery">
        <div className="image-placeholder">Image</div>
        <div className="image-placeholder">Image</div>
        <div className="image-placeholder">Image</div>
        <div className="image-placeholder">Image</div>
      </div>
    </main>
  );
};

const ChatSidebar = () => {
  return (
    <aside className="chat-sidebar">
      <div className="chat-header">Chat</div>
      <ul className="chat-users">
        <li>User Two</li>
        <li>User 3</li>
        <li>User 6</li>
        <li>User 76</li>
      </ul>
    </aside>
  );
};

const HomePage = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
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

  const handleHelp = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsUpdateModalOpen(true);
  };



  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleHelp(event);
    handleLogoutClick();
  };

  return (
    <div className="home-page">
      <Header handleFormSubmit={handleFormSubmit} onLogout={handleLogoutClick} onUpdateModal={handleHelp} />
      <MainContent />
      <ChatSidebar />

      <UpdateModal isUpdateModalOpen={isUpdateModalOpen} onUpdateModalClose={closeUpdateModal}>
        <h2>Update Profie</h2>
        <form onSubmit={handleHelp}>
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
          <button className="btn" type="submit">Help</button>
        </form>
      </UpdateModal>
    </div>
  );
};

export default HomePage;
