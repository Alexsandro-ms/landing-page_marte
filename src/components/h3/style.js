import styled from "styled-components";

export const Container = styled.div`
  max-width: 728px;
  max-height: 359px;
  margin-bottom: 32px;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.h3`
  max-width: 728px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: var(--gray-05);
  @media screen and (max-width: 480px) {
    max-width: 307.64px;
    text-align: center;
  }
`;
