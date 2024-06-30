import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css';
import { FaUser, FaLock} from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='container'>
        <div className='left-column'>
        <p>LoanHub adalah sebuah aplikasi peminjaman yang dirancang berdasarkan keluhan sebagian dari fungsionaris organisasi mahasiswa di lingkungan kampus. Aplikasi ini bertujuan untuk memudahkan proses peminjaman barang dengan meningkatkan efisiensi dan transparansi dalam pengelolaan peminjaman.</p>
      </div>
      <div style={{ width: '420px', backgroundColor: 'rgb(255, 255, 255)' }} className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;