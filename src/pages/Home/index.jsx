import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ItemListCount from '../../constants/ItemListCount';
import { Context } from '../../context/default';
import BreedSelect from './BreedSelect';
import CatContainer from './CatContainer';

import * as S from './styles';

export default function Home() {
  const { selectBreed } = useContext(Context);

  const [catsList, setCatsList] = useState([]);
  const [catsListCount, setCatsListCount] = useState(0);
  const [itemLimit, setItemLimit] = useState(ItemListCount);

  /* Get request for the cats list */
  useEffect(() => {
    if (selectBreed !== '') {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_ROUTE}images/search?limit=${itemLimit}&breed_id=${selectBreed}&order=DESC`,
            {
              headers: {
                'x-api-key': process.env.REACT_APP_API_KEY,
              },
            },
          );
          /* Set the cats list */
          setCatsList(response.data);
          /* Set howmany was returned by the get request */
          setCatsListCount(response.data.length);
        } catch (e) {
          console.log(e);
          /* TODO: Implement error handling */
        }
      };
      fetchData();
    }
  }, [itemLimit, selectBreed]);

  /* Outputs the list of cats */
  const catsListOutput = catsList.map((cat) => (
    <CatContainer id={cat.id} image={cat.url} />
  ));

  /* Responsible for loading more cats */
  const handleLoadMore = () => {
    const newItemLimit = itemLimit + ItemListCount;
    setItemLimit(newItemLimit);
  };

  /* Responsible for displaying the Load More button */
  /* Desc: If the the list of cats displayed is equal to the set limit, there is more to load */
  const showLoadMore = catsListCount === itemLimit && (
    <S.LoadMoreButton onClick={handleLoadMore}>Load More</S.LoadMoreButton>
  );

  return (
    <S.Container>
      <h1>Cat Browser</h1>
      <h5>Select a Breed</h5>
      <BreedSelect />
      <S.CatListContainer>{catsListOutput}</S.CatListContainer>
      {showLoadMore}
    </S.Container>
  );
}
