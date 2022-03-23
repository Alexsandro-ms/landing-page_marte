import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 481px) {
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const Content = styled.div`
  @media screen and (min-width: 481px) {
  }
  margin: 27px 15px 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AsideLeft = styled.div``;
export const AsideRight = styled.div``;
export const Img = styled.img`
  pointer-events: none;
  width: 90%;
`;
