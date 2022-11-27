import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as S from './styles';
import routes from '../../../constants/routes';

export default function CatContainer(props) {
  const { cat } = props;

  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  /* Reroute the user to the single cat page, pass information, no need for another query */
  const handleViewDetails = (catInformation) => {
    navigate(routes.SINGLE_CAT, {
      state: { catInformation },
    });
  };

  /* Shows image when done loading */
  const handleShowImage = loaded ? 'loaded' : 'notLoaded';

  /* Shows loading when image is not done loading */
  const handleShowLoading = loaded ? 'loading' : 'notLoading';

  return (
    <S.Container>
      <S.Loading className={handleShowLoading} />
      <S.Image
        src={cat.url}
        key={cat.id}
        onLoad={() => setLoaded(true)}
        className={handleShowImage}
        alt=" "
      />
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
