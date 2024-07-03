// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth';  // Import logout from auth.js

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      alert('Gagal logout: ' + error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
