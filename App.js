import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Friends from './Friends';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import ContactUs from './ContactUs';
import PixVibe from './PixVibe';
import SignupPage from './SignupPage';
import Profile from './Profile';
import './App.css';

const App = () => {
  return (
    <Router>

        <div className="App app-background">
          {/* <header>
            <div className="header-links">
              <Link to="/">PixVibe</Link>
              <Link to="/homepage">Feed</Link>
              <Link to="/friends">Friends</Link>
              <Link to="/help">Help</Link>
            </div>
          </header> */}

          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />}  />
            <Route path="/friends" element={<Friends />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsConditions />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/pixvibe" element={<PixVibe />} />
            <Route path="/profile/:friendId" element={<Profile />}  />
          </Routes>

          {/* <footer>
            <div className="footer-links">
              <Link to="/pixvibe">PixVibe @ 2024</Link>
              <Link to="/contactus">Contact Us</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/termsandconditions">Terms & Conditions</Link>
            </div>
          </footer> */}
        </div>
     
    </Router>
  );
}



export default App;
