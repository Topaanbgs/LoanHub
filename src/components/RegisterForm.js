// src/components/RegisterForm.js
import React, { useState } from 'react';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`;

const Button = styled.button`
  background: #333;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
