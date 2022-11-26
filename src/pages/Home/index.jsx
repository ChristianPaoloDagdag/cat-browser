import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import AlertBanner from '../../components/AlertBanner';
import DefaultItemListCount from '../../constants/DefaultItemListCount';
import { Context } from '../../context/default';
import BreedSelect from './BreedSelect';
import CatContainer from './CatContainer';

import * as S from './styles';

export default function Home() {
  const { selectBreed, alertBannerOpen, setAlertBannerOpen } = useContext(Context);

  const [catsList, setCatsList] = useState([]);
  const [catsListCount, setCatsListCount] = useState(0);
  const [itemLimit, setItemLimit] = useState(DefaultItemListCount);

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
          setAlertBannerOpen(true);
        }
      };
      fetchData();
    } else {
      setCatsList([]);
      setCatsListCount(0);
    }
  }, [itemLimit, selectBreed]);

  /* Outputs the list of cats */
  const catsListOutput = (
    <S.CatListContainer>
      {catsList.map((cat) => (
        <CatContainer id={cat.id} image={cat.url} />
      ))}
    </S.CatListContainer>
  );

  /* Responsible for loading more cats */
  const handleLoadMore = () => {
    const newItemLimit = itemLimit + DefaultItemListCount;
    setItemLimit(newItemLimit);
  };

  /* Shows no cats are avaialable */
  const catListAvailability = catsListCount === 0 ? (
    <S.NoCatsContainer>No cats available</S.NoCatsContainer>
  ) : (
    catsListOutput
  );

  /* Responsible for displaying the Load More button */
  /* Desc: If the the list of cats displayed is equal to the set limit, there is more to load */
  const showLoadMore = catsListCount === itemLimit && (
    <Button onClick={handleLoadMore}>Load More</Button>
  );

  /* Shows and hides the Alert Banner */
  const hideAlertBanner = alertBannerOpen === true && <AlertBanner />;

  return (
    <S.Container>
      <h1>Cat Browser</h1>
      <h5>Select a Breed</h5>
      <BreedSelect />
      {hideAlertBanner}
      {catListAvailability}
      {showLoadMore}
    </S.Container>
  );
}
