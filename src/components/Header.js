// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50;
  padding: 10px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 100px;
    margin-right: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;

const Menu = styled.div`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    padding: 0 15px;
    font-size: 18px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  console.log('Header rendered');
  return (
    <Navbar>
      <Logo>
        <img src={logo} alt="LoanHub Logo" />
        <span>LoanHub</span>
      </Logo>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </Menu>
    </Navbar>
  );
};

export default Header;
