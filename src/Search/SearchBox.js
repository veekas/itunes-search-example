import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';

const StyledContainer = styled.div`
  grid-area: search;
  // background-color: #6D47D9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBox = props => (
  <StyledContainer>
    <SearchBar onChange={props.onChange} />
  </StyledContainer>
);

export default SearchBox;
