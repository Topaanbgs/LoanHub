// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Form from './pages/Form';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
