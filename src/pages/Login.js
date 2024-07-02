// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika autentikasi disini
    if (username === 'admin' && password === '123') {
      history.push('/home');
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-left-column'>
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div className='login-right-column'>
        <div className='login-wrapper'>
          <form action="">
            <h1>Login</h1>
            <div className="login-input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="login-input-box">
              <input type="password" placeholder='Password' required />
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
