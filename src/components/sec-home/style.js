import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 480px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 134px;
  }
`;

export const AsideLeft = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 112px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const AsideRight = styled.div`
  @media screen and (min-width: 769px) {
    min-width: 35%;
    height: 563px;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
