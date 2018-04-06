import React, { Component } from 'react';
import styled from 'styled-components';

import searchiTunes from '../assets/api';

import SearchBox from './SearchBox';
import Results from './Results';
import NoResults from './NoResults';

const StyledContainer = styled.div`
  width: 80vw;
  height: 80vh;
  background: linear-gradient(to top, #F93D66, #6D47D9);
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
  state = {
    query: '',
    albums: null,
  }

  handleQuery = input => {
    this.setState({ query: input });
    searchiTunes(input)
      .then(albums => {
        this.setState({ albums });
      }, err => console.error(err));
  }

  render() {
    const { albums } = this.state;

    return(
      <StyledContainer>
        <SearchBox onChange={this.handleQuery} />
        {
          albums && albums.length
            ? <Results albums={albums} />
            : <NoResults />
        }
      </StyledContainer>
    );
  }
}

 export default ContentArea;
