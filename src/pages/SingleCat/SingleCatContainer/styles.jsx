import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 1300px;
  background-color: ${(props) => props.theme.color.offWhite};
`;

export const BackButtonContainer = styled.div`
    display: flex;
    height: 61px;
    align-items: center;
    padding: 15px;
`;

export const Image = styled.img`
  width: 1100px;
`;
