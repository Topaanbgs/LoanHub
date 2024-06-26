// src/pages/ItemDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../services/item';
import styled from 'styled-components';

const ItemDetailContainer = styled.div`
  padding: 20px;
`;

const ItemDetail = styled.div`
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
`;

const ItemName = styled.h3`
  margin: 0 0 10px 0;
`;

const ItemDescription = styled.p`
  margin: 0;
`;

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItemById(id);
      setItem(item);
    };

    fetchItem();
  }, [id]);

  return (
    <ItemDetailContainer>
      {item && (
        <ItemDetail>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemDetail>
      )}
    </ItemDetailContainer>
  );
};

export default ItemDetailPage;
