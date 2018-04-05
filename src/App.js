import React, { Component } from 'react';
import styled from 'styled-components';

import ContentArea from './ContentArea';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <ContentArea />
      </StyledApp>
    );
  }
}

export default App;
