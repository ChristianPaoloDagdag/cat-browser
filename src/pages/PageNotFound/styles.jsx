import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Image = styled.img`
  height: 275px;
`;

export const Title = styled.div`
  font-size: 100px;
  letter-spacing: 25px;
  margin-top: -75px;

  @media (min-width: 460px) {
    font-size: 200px;
    margin-top: -150px;
  }
`;

export const Subtitle = styled.div`
  font-size: 25px;
  margin-bottom: 30px;
  margin-top: -30px;

  @media (min-width: 460px) {
    font-size: 40px;
    margin-top: -50px;
  }
`;
