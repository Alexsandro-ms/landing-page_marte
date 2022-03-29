import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 481px) {
    width: 100%;
    height: 100%;
    background: #0d0e13;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen and (max-width: 920px) {
    flex-direction: column;
  } */
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const AsideRight = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;
export const AsideLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const SmokerD = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }
`;
