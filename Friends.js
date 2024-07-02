import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState('');

  useEffect(() => {
    const fetchFriends = async () => {
      const friendsCollection = collection(db, 'friends');
      const friendsSnapshot = await getDocs(friendsCollection);
      const friendsList = friendsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFriends(friendsList);
    };

    fetchFriends();
  }, []);

  const handleAddFriend = async () => {
    if (newFriend.trim()) {
      const friendsCollection = collection(db, 'friends');
      await addDoc(friendsCollection, { name: newFriend });
      setNewFriend('');
      // Fetch updated list of friends
      const friendsSnapshot = await getDocs(friendsCollection);
      const friendsList = friendsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFriends(friendsList);
    }
  };

  return (
    <div className="friends">
      <h1>Friends</h1>
      <div>
        <input
          type="text"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          placeholder="Add a new friend"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
