import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CatLoading from '../../../assets/CatLoading.gif';

export const Container = styled(Card)`
  align-items: center;
  background-color: ${(props) => props.theme.color.offWhite};
  display: flex;
  flex-direction: column;
  width: 225px;
`;

export const Loading = styled.div`
  background-image: url(${CatLoading});
  background-position: center;
  background-size: 290px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 223px;
  width: 223px;

  &.loading {
    display: none;
  }

  &.notLoading {
    display: block;
  }
`;

export const Image = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 223px;
  width: 223px;

  &.loaded {
    display: block;
  }

  &.notLoaded {
    display: none;
  }
`;

export const ViewDetailsButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: center;
`;
