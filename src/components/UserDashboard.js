// src/components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { getItems, borrowItem } from '../services/item';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ItemCard = styled.div`
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  width: 200px;
`;

const ItemName = styled.h3`
  margin: 0 0 10px 0;
`;

const ItemDescription = styled.p`
  margin: 0;
`;

const BorrowButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

const UserDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setItems(items);
    };

    fetchItems();
  }, []);

  const handleBorrow = async (itemId) => {
    try {
      await borrowItem(itemId, "userId"); // Replace "userId" with actual userId
      alert("Item borrowed successfully!");
    } catch (error) {
      console.error("Failed to borrow item", error);
    }
  };

  return (
    <DashboardContainer>
      <h2>Your Dashboard</h2>
      <ItemContainer>
        {items.map(item => (
          <ItemCard key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
            <BorrowButton onClick={() => handleBorrow(item.id)}>Borrow</BorrowButton>
          </ItemCard>
        ))}
      </ItemContainer>
    </DashboardContainer>
  );
};

export default UserDashboard;
