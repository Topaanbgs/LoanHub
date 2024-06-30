// RegisterForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Register.css';
import { FaUser, FaLock} from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className='container'>
        <div className='left-column'>
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div style={{ width: '420px', backgroundColor: 'rgb(255, 255, 255)' }} className='wrapper'>
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Confirm Password' required />
            <FaLock className='icon'/>
          </div>

          <button type="submit">Register</button>

          <div className="login-link">
            <p>Already have an account? <Link to="/">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;