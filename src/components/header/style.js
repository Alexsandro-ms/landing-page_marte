import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 89px;
    display: flex;
    justify-content: center;
    margin-bottom: 55px;

    img {
      width: 30%;
      pointer-events: none;
    }
  }
`;
