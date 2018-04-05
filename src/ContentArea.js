import React, { Component } from 'react';
import styled from 'styled-components';

import SearchBox from './Search/SearchBox';
import Results from './Search/Results';

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

class ContentArea extends Component {
  state = { query: '' }

  handleQuery = input => {
    setTimeout(() => {
      this.setState({ query: input });

    },
      500);
  }

  render() {
    return(
      <StyledContainer>
        <SearchBox onChange={this.handleQuery} />
        <Results />
      </StyledContainer>
    );
  }
}

 export default ContentArea;
