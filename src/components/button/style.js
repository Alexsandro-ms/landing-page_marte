import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 63px;
  }
`;
export const Button = styled.button`
  width: 254px;
  height: 62px;
  background: var(--mars);
  border-radius: var(--border-radiusB);
  font-weight: 700;
  color: var(--white);
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    transform: scale(0.8);
    box-shadow: 1px 0.5px 8px rgba(255, 255, 255, 0.3);
  }
`;
