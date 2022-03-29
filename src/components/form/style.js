import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #0e0d40;
  border-radius: 20px;
`;

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;

  img {
    margin-top: 39px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23.5px;
  color: var(--white);
`;
export const Input = styled.input`
  display: block;
  margin-bottom: 24px;
  width: 100%;
  height: 56px;
  border-radius: var(--border-radiusB);
  background-color: transparent;
  border: 1px solid var(--gray-05);
  color: var(--sun);
  outline: none;
`;
export const Checkbox = styled.input`
  margin-right: 16px;
  margin-bottom: 32px;
  border: 1px solid var(--gray-03);
  background: none;
`;

export const Span = styled.span`
  color: var(--white);
`;

export const Btn = styled.div`
  margin-bottom: 61px;
`;
