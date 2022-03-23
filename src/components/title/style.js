import styled from "styled-components";

export const Title = styled.div`
  color: var(--sun);
  line-height: 20.56px;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    overflow: hidden;
    text-align: center;
    min-height: 42px;
    font-size: 14px;
    min-width: 273px;
  }
`;
