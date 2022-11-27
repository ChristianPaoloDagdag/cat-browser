import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import routes from '../../../constants/routes';
import { Context } from '../../../context/default';

export default function SingleCatContainer(props) {
  const { breeds, image } = props;

  const { setSelectBreed } = useContext(Context);

  const navigate = useNavigate();

  /* Handles when the back button is clicked, pass the breed id */
  const handleBack = () => {
    setSelectBreed(breeds[0].id);
    navigate(routes.HOME);
  };

  /* Return the breed information */
  const breedInformation = breeds.map(
    ({
      description,
      name,
      origin,
      temperament,
    }) => (
      <div key={name}>
        <h4>{name}</h4>
        <h5>
          Origin:
          {' '}
          {origin}
        </h5>
        <h6>{temperament}</h6>
        <div>{description}</div>
      </div>
    ),
  );

  return (
    <S.Container>
      <S.BackButtonContainer>
        <Button onClick={handleBack}>Back</Button>
      </S.BackButtonContainer>
      <S.Image src={image} alt=" " />
      <S.InformationContainer>{breedInformation}</S.InformationContainer>
    </S.Container>
  );
}
