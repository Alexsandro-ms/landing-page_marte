import styled from "styled-components";

export const Title = styled.div`
  color: var(--sun);
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    text-align: center;
    min-height: 42px;
    font-size: 65%;
    min-width: 273px;
  }
`;
