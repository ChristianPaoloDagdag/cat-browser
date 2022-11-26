import React from 'react';
import * as S from './styles';

export default function CatContainer(props) {
  const { id, image } = props;

  return (
    <S.Container>
      <S.Image src={image} key={id} alt=" " />
    </S.Container>
  );
}
