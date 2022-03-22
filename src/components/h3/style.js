import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const Text = styled.h3`
  @media screen and (max-width: 480px) {
    max-width: 307.64px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: center;
    color: var(--gray-05);
    text-align: center;
  }
`;
