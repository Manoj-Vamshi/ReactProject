import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Friends from './Friends';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import ContactUs from './ContactUs';
import PixVibe from './PixVibe';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <header>
          <div className="header-links">
            <a href="#">PixVibe</a>
            <a href="#">Feed</a>
            <a href="friends" >Friends</a>
            <a href="#" navigate="/help">Help</a>
          </div>
          
        </header> */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsConditions />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pixvibe" element={<PixVibe />} />
        </Routes>
        <footer>
          <div className="footer-links">
            <a href="pixvibe" >PixVibe @ 2024</a>
            <a href="contactus" >Contact Us</a>
            <a href="privacypolicy">Privacy Policy</a>
            <a href="termsandconditions">Terms & Conditions</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
