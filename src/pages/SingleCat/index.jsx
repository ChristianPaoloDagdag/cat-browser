import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleCatContainer from './SingleCatContainer';
import Container from './styles';

export default function SingleCat() {
  const location = useLocation();

  /* Get catInformation from handleView */
  const {
    width,
    url,
    id,
    height,
    breeds,
  } = location.state.catInformation;
  console.log(breeds, height, id, url, width);

  return <Container><SingleCatContainer image={url} /></Container>;
}