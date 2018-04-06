import React, { Component } from 'react';
import styled from 'styled-components';

import { truncate } from '../utils';

const StyledContainer = styled.div`
  padding: 20px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const AlbumContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 10px;
  align-items: center;
  color: white;
  font-weight: 100;
`;

const AlbumArt = styled.img`
  width: 100%;
`;

const AlbumDetails = styled.div`
  color: whitesmoke;
`;

const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;

const Results = ({ albums }) => (
  <StyledContainer>
    {
      albums.map((album, index) => (

        <AlbumContainer key={index}>
          <AlbumArt src={album.artworkUrl100} alt="cover" />

          <AlbumDetails>
            <StyledH3>{truncate(album.collectionName, 20)}</StyledH3>
            <StyledH3>{truncate(album.artistName, 20)}</StyledH3>
            <a href={album.collectionViewUrl}>
              <StyledH2>${album.collectionPrice}</StyledH2>
            </a>
          </AlbumDetails>
        </AlbumContainer>

      ))
    }
  </StyledContainer>
);

export default Results;
