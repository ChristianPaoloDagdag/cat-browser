import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const Container = styled(Card)`
  width: 1100px;
  flex-direction: column;
  display: flex;
  background-color: ${(props) => props.theme.color.offWhite};
`;

export const BackButtonContainer = styled.div`
  padding: 15px;
  height: 61px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 1100px;
`;

export const InformationContainer = styled.div`
  padding: 20px 15px;
  height: 224px;
  flex-direction: column;
  display: flex;
  background-color: pink;
`;
