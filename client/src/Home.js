import React from 'react';
import AuthService from './AuthService';

const Home = ({ setIsAuthenticated }) => {
    const handleLogout = () => {
        AuthService.logout();
        setIsAuthenticated(false);
    };

    return (
        <div>
            <h2>Welcome Home</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
