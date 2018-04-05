import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './Search/Search';

const StyledContainer = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #FDFDFD;
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: grid;
  grid-template-rows: minmax(90px, 1fr) 6fr;
  grid-template-areas:
    "search"
    "results";

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`;

const ContentArea = ({ name }) => (
  <StyledContainer>
    <Search />
    <div>THIS WILL BE THE RESULTS</div>
  </StyledContainer>
 );

 export default ContentArea;
