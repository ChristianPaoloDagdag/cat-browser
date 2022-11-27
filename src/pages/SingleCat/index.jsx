import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleCatContainer from './SingleCatContainer';
import Container from './styles';

export default function SingleCat() {
  const location = useLocation();

  /* Get catInformation from handleView */
  const { breeds, url } = location.state.catInformation;

  return (
    <Container>
      <SingleCatContainer image={url} breeds={breeds} />
    </Container>
  );
}
