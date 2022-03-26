import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) {
    width: 100%;
    height: 100%;
    background: #0d0e13;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AsideRight = styled.div`
  width: 40%;
  img {
    width: 82%;
  }
`;
export const AsideLeft = styled.div`
  width: 40%;
  margin-right: 80px;
`;
export const SmokerD = styled.div`
  width: 100%;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }
`;
