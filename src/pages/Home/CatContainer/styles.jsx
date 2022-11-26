import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 225px;
`;

export const Image = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 225px;
  height: 225px;
`;

export const ViewDetailsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
