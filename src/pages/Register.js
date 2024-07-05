// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../auth';
import '../components/Register.css';
import logo from '../assets/newlogo.png';
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await register(username, password);
        navigate('/home');
      } catch (error) {
        alert('Gagal mendaftar: ' + error.message);
      }
    } else {
      alert('Password dan Konfirmasi Password tidak sama');
    }
  };

  return (
    <div className='register-container'>
      <div className='register-left-column'>
      <img src={logo} alt="Campus News Logo" className="login-logo" />
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div className='register-right-column'>
        <div className='register-wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="register-input-box">
              <input type="email" placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} required />
              <FaUser className='icon'/>
            </div>
            <div className="register-input-box">
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <FaLock className='icon'/>
            </div>
            <div className="register-input-box">
              <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <FaLock className='icon'/>
            </div>

            <button type="submit">Register</button>

            <div className="register-login-link">
              <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
