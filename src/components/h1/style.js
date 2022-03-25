import styled from "styled-components";

export const Container = styled.div`
  max-width: 550px;
  @media screen and (max-width: 480px) {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 52.88px;
  color: var(--white);
  letter-spacing: 1px;
  @media screen and (max-width: 480px) {
    min-width: 341px;
    text-align: center;
    margin-bottom: 16.33px;
  }
  span {
    color: var(--sun);
  }
`;
