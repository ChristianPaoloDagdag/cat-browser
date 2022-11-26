import React from 'react';
import BreedSelect from './BreedSelect';

import Container from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Cat Browser</h1>
      <h5>Breed</h5>
      <BreedSelect />
    </Container>
  );
}
