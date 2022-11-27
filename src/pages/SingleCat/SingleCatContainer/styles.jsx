import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Container = styled(Card)`
  background-color: ${(props) => props.theme.color.offWhite};
  display: flex;
  flex-direction: column;
  max-width: 1100px;
`;

export const BackButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 61px;
  padding: 15px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 224px;
  padding: 20px 15px;
`;
