// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../auth'; 
import '../components/Login.css';
import logo from '../assets/newlogo.png';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/home');
    } catch (error) {
      alert('Username atau password salah');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-left-column'>
      <img src={logo} alt="Campus News Logo" className="login-logo" />
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div className='login-right-column'>
        <div className='login-wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="login-input-box">
              <input type="email" placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} required />
              <FaUser className='icon'/>
            </div>
            <div className="login-input-box">
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <FaLock className='icon'/>
            </div>

            <div className="login-remember-forgot">
              <label><input type="checkbox" />Remember me</label>
            </div>

            <button type="submit">Login</button>

            <div className="login-register-link">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
