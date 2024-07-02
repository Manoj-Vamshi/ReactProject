import React from 'react';
import Header from './HomePage';
import MainContent from './HomePage';
import ChatSidebar from './HomePage';

const Friends = () => {
    // Example data for users and their feeds
    const users = [
        { id: 1, name: 'User One', feed: ['Feed 1', 'Feed 2'] },
        { id: 2, name: 'User Two', feed: ['Feed 1', 'Feed 2', 'Feed 3'] },
        { id: 3, name: 'User Three', feed: ['Feed 1'] },
    ];

    return (

        <div className="friends-page">

            <h1>Friends Page</h1>

            <div className="users-list">
                <h2>Users</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong>
                            <ul>
                                {user.feed.map((feed, index) => (
                                    <li key={index}>{feed}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Friends;
