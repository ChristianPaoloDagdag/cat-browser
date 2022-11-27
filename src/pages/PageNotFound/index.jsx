import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import SadCat from '../../assets/SadCat.png';
import routes from '../../constants/routes';

export default function PageNotFound() {
  const navigate = useNavigate();

  /* Reroutes the user to the Home page */
  const handleGoHome = () => {
    navigate(routes.HOME);
  };

  return (
    <S.Container>
      <S.Image src={SadCat} alt=" " />
      <S.Title>404</S.Title>
      <S.Subtitle>Page not found.</S.Subtitle>
      <Button
        onClick={() => {
          handleGoHome();
        }}
      >
        Go Home
      </Button>
    </S.Container>
  );
}
