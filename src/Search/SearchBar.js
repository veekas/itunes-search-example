import React, { Component } from 'react';
import styled from 'styled-components';

const placeHolderColor = 'lightgray'

const StyledSearchBar = styled.input`
  background: transparent;
  color: whitesmoke;
  border: none;
  border-radius: 4px;
  font-size: 3rem;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  min-height: 2.5rem;

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: ${placeHolderColor};
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: ${placeHolderColor};
    opacity:  1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: ${placeHolderColor};
    opacity:  1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${placeHolderColor};
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${placeHolderColor};
  }
  ::placeholder {
    color: ${placeHolderColor};
  }
`;

class SearchBar extends Component {

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <StyledSearchBar
        type="text"
        onChange={this.handleChange}
        placeholder="Search for Artists"
      />
    );
  }
};

export default SearchBar;
