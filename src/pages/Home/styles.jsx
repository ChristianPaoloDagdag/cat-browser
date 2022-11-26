import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 50px;
`;

export const CatListContainer = styled.div`
  display: grid;
  row-gap: 30px;
  column-gap: 30px;
  grid-template-columns: repeat(1, 1fr);

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
