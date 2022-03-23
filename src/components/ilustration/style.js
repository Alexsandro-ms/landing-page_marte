import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 427.6px;
    margin: 0 auto;
    margin-bottom: 90.32px;
    position: relative;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 480px) {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
  }
  @media screen and (max-width: 480px) {
    width: 418px;
    height: 427.6px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    position: absolute;
    top: 0;
  }
`;
