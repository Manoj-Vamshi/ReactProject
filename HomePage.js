import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile, updateUserEmailAndPassword } from './updateUserProfile';
import { auth, db } from './firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

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

const MainContent = ({ userName, images, handleImageUpload, handleImageDelete }) => {
  return (
    <main className="main-content">
      <div className="welcome-message">Welcome {userName}!</div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Image ${index + 1}`} />
            <button onClick={() => handleImageDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
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
    currentPassword: '',
    email: '',
    newPassword: '',
    birthday: '',
    gender: ''
  });

  const [userName, setUserName] = useState('');
  const [images, setImages] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            console.log('User Data:', userData);
            setUserName(`${userData.firstName} ${userData.lastName}`);
            setImages(userData.images || []); 
          } else {
            console.error('User document not found');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.error('No user signed in');
      }
    };

    fetchUserData();
  }, []);

 
  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();

    reader.onload = async function (e) {
      const newImage = {
        id: images.length + 1, 
        url: e.target.result, 
      };

      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          await updateDoc(userDocRef, {
            images: [...images, newImage], 
          });
          setImages([...images, newImage]); 
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    reader.readAsDataURL(file); 
  };

  
  const handleImageDelete = async (index) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const updatedImages = images.filter((image, i) => i !== index); 
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, { images: updatedImages }); 
        setImages(updatedImages); 
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleHelp = async (e) => {
    e.preventDefault();
    const { email, newPassword, currentPassword, ...profileData } = formData;
    const user = auth.currentUser;
    if (user) {
      try {
        await updateUserEmailAndPassword(currentPassword, email, newPassword);
        await updateUserProfile(user.uid, profileData);
        console.log('User profile updated successfully');
        setIsUpdateModalOpen(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };


  const handleLogoutClick = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      navigate('/');
    });
  };

  return (
    <div className="home-page">
      <Header handleFormSubmit={handleHelp} onLogout={handleLogoutClick} onUpdateModal={() => setIsUpdateModalOpen(true)} />
      <MainContent userName={userName} images={images} handleImageUpload={handleImageUpload} handleImageDelete={handleImageDelete} />
      <ChatSidebar />
    </div>
  );
};

export default HomePage;
