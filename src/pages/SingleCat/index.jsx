import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AlertBanner from '../../components/AlertBanner';
import { Context } from '../../context/default';
import SingleCatContainer from './SingleCatContainer';
import Container from './styles';

export default function SingleCat() {
  const { alertBannerOpen } = useContext(Context);

  const location = useLocation();

  /* Get catInformation from handleView */
  const { breeds, url } = location.state.catInformation;

  /* Shows and hides the Alert Banner */
  const showAlertBanner = alertBannerOpen === true && <AlertBanner />;

  return (
    <Container>
      {showAlertBanner}
      <SingleCatContainer image={url} breeds={breeds} />
    </Container>
  );
}
