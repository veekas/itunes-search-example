import React, { Component } from 'react';
import styled from 'styled-components';

import Hello from './Hello';

const StyledApp = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Hello name="World" />
      </StyledApp>
    );
  }
}

export default App;
