import React from 'react';
import { ContainerStyle } from './styles';
import Products from './ItemListContainer';

const Container = ({ greeting }) => {
  return (
    <ContainerStyle>
      <h1>{greeting}</h1>
      <Products />
    </ContainerStyle>
  );
};

export default Container;
