// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItems } from '../services/item';

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
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

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setItems(items);
    };

    fetchItems();
  }, []);

  return (
    <ItemContainer>
      {items.map(item => (
        <ItemCard key={item.id}>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemCard>
      ))}
    </ItemContainer>
  );
};

export default ItemList;
