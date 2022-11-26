import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const Container = styled(Card)`
  width: 225px;
  flex-direction: column;
  display: flex;
  background-color: ${(props) => props.theme.color.offWhite};
  align-items: center;
`;

export const Image = styled.img`
  width: 225px;
  height: 225px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ViewDetailsButtonContainer = styled.div`
  justify-content: center;
  height: 70px;
  display: flex;
  align-items: center;
`;
