import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  gap: 15px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const CatListContainer = styled.div`
  row-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  column-gap: 30px;

  @media ${(props) => props.theme.device.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.device.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.device.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const NoCatsContainer = styled.div`
  text-align: center;
`;
