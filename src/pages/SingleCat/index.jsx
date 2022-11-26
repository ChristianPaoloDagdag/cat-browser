import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SingleCat() {
  const location = useLocation();

  /* Get catInformation from handleView */
  const {
    breeds,
    height,
    id,
    url,
    width,
  } = location.state.catInformation;
  console.log(breeds, height, id, url, width);

  return <div>Single Cat</div>;
}
