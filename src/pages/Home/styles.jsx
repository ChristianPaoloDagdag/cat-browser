import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 50px;
`;

export const CatListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 30px;
`;

export const LoadMoreButton = styled(Button)`
`;
