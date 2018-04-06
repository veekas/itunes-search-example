import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  overflow: auto;
  display: flex;
  justify-content:center;
  align-content:center;
  flex-direction:column;
`;

const StyledNoResults = styled.div`
  font-size: 5rem;
`;

const NoResults = () => {
  return (
    <StyledContainer>
      <StyledNoResults>
        🎵
      </StyledNoResults>
    </StyledContainer>
  );
}

export default NoResults;
