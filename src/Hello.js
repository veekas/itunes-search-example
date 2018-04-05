import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
`;

const Hello = ({ name }) => (
  <StyledContainer>
    Hello, {name}!
  </StyledContainer>
 );

 export default Hello;
