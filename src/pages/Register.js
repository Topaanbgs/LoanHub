// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Register.css';
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pendaftaran disini
    if (password === confirmPassword) {
      history.push('/home');
    } else {
      alert('Password dan Konfirmasi Password tidak sama');
    }
  };
  return (
    <div className='register-container'>
      <div className='register-left-column'>
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div className='register-right-column'>
        <div className='register-wrapper'>
          <form action="">
            <h1>Register</h1>
            <div className="register-input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="register-input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="register-input-box">
              <input type="password" placeholder='Confirm Password' required />
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
