import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as S from './styles';
import routes from '../../../constants/routes';

export default function CatContainer(props) {
  const { cat } = props;

  const navigate = useNavigate();

  /* Reroute the user to the single cat page, pass information, no need for another query */
  const handleViewDetails = (catInformation) => {
    navigate(routes.SINGLE_CAT, {
      state: { catInformation },
    });
  };

  return (
    <S.Container>
      <S.Image src={cat.url} key={cat.id} alt=" " />
      <S.ViewDetailsButtonContainer>
        <Button
          onClick={() => {
            handleViewDetails(cat);
          }}
        >
          View details
        </Button>
      </S.ViewDetailsButtonContainer>
    </S.Container>
  );
}
