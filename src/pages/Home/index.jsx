import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/default';
import BreedSelect from './BreedSelect';

import Container from './styles';

export default function Home() {
  const { selectBreed, setSelectBreed } = useContext(Context);

  useEffect(() => {
    if (selectBreed !== '') {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_ROUTE}images/search?limit=10&breed_id=${selectBreed}&order=DESC`,
            {
              headers: {
                'x-api-key': process.env.REACT_APP_API_KEY,
              },
            },
          );
          setSelectBreed(response.data);
        } catch (e) {
          console.log(e);
          /* TODO: Implement error handling */
        }
      };
      fetchData();
    }
  }, [selectBreed]);

  return (
    <Container>
      <h1>Cat Browser</h1>
      <h5>Breed</h5>
      <BreedSelect />
    </Container>
  );
}
