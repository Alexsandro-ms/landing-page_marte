import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 104px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 55px;
  }
`;
export const Img = styled.div`
  width: 12%;
  margin-left: 112px;
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    width: 30%;
  }
`;
