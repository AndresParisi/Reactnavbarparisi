import React from 'react';
import { ContainerStyle } from './styles';
import ItemListContainer from './ItemListContainer';

const Container = ({ greeting }) => {
  return (
    <ContainerStyle>
      <h1>{greeting}</h1>
      <ItemListContainer />
    </ContainerStyle>
  );
};

export default Container;
