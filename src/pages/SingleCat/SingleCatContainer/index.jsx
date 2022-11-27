import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import routes from '../../../constants/routes';
import { Context } from '../../../context/default';

export default function SingleCatContainer(props) {
  const { image, breeds } = props;

  const { selectBreed, setSelectBreed } = useContext(Context);

  const navigate = useNavigate();

  console.log('breeds', breeds);

  const handleBack = () => {
    setSelectBreed(selectBreed);
    navigate(routes.HOME);
  };

  return (
    <S.Container>
      <S.BackButtonContainer>
        <Button onClick={handleBack}>Back</Button>
      </S.BackButtonContainer>
      <S.Image src={image} alt=" " />
      <S.InformationContainer>
        <h4>
          {breeds.map((breed) => (
            <div key={breed.name}>{breed.name}</div>
          ))}
        </h4>
      </S.InformationContainer>
    </S.Container>
  );
}
