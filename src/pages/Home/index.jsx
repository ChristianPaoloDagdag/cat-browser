import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/default';
import BreedSelect from './BreedSelect';
import CatContainer from './CatContainer';

import * as S from './styles';

export default function Home() {
  const { selectBreed } = useContext(Context);

  const [catsList, setCatsList] = useState([]);

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
          setCatsList(response.data);
        } catch (e) {
          console.log(e);
          /* TODO: Implement error handling */
        }
      };
      fetchData();
    }
  }, [selectBreed]);

  const catsListOutput = catsList.map((cat) => <CatContainer id={cat.id} image={cat.url} />);

  return (
    <S.Container>
      <h1>Cat Browser</h1>
      <h5>Breed</h5>
      <BreedSelect />
      <S.CatListContainer>{catsListOutput}</S.CatListContainer>
    </S.Container>
  );
}
