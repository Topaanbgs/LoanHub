// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  text-align: center;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
