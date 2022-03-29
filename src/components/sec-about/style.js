import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 481px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const Content = styled.div`
  @media screen and (min-width: 768px) {
    margin: 27px auto 291px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const AsideLeft = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;
export const AsideRight = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    display: block;
    width: 70%;
    margin: 15px auto;
  }
`;
export const Img = styled.img`
  pointer-events: none;
  width: 90%;
`;
export const SecSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto 100px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AsideLeftC = styled.div`
  width: 35%;
  margin: 0 13px 0 0;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
export const AsideTitle = styled.div`
  max-width: 162px;
`;
export const AsideText = styled.div`
  width: 484px;

  a {
    color: var(--mars-light);
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    align-items: center;
  }
`;
export const AsideRightC = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
