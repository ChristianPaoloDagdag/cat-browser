import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const Container = styled(Card)`
  align-items: center;
  background-color: ${(props) => props.theme.color.offWhite};
  display: flex;
  flex-direction: column;
  width: 225px;
`;

export const Image = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 225px;
  width: 225px;
`;

export const ViewDetailsButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: center;
`;
