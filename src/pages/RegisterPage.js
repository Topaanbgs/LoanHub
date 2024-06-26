// src/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styled from 'styled-components';

const RegisterPageContainer = styled.div`
  text-align: center;
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
