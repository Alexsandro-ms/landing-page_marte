import styled from "styled-components";

export const Card = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 64.59px;
  }
`;

export const Content = styled.div`
  max-width: 230px;
`;
export const Img = styled.img`
  margin-bottom: 8.41px;
`;

export const H3 = styled.h3`
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  opacity: 80%;
  color: #fff;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 16px;
    text-align: center;
  }
`;
