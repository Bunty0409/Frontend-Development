// src/HomePage.js
import React from 'react';
import styled from 'styled-components';
import productsData from './products.json';

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
`;

const ProductImage = styled.img`
  max-width: 100%;
  width:200px;
height:200px;
`;

const ProductTitle = styled.h2`
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
`;

const HomePage = () => {
  const products = productsData.products;

  return (
    <div>
      <Header>
        <Container>
          <Title>My Shopping Site</Title>
        </Container>
      </Header>

      <Container>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
