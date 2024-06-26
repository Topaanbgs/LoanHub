// src/pages/DashboardPage.js
import React from 'react';
import UserDashboard from '../components/UserDashboard';
import styled from 'styled-components';

const DashboardPageContainer = styled.div`
  text-align: center;
`;

const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <UserDashboard />
    </DashboardPageContainer>
  );
};

export default DashboardPage;
