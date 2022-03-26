import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 136px;
  background: var(--gray-01);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 15%;
  img {
    width: 100%;
  }
`;
export const SocialNetworks = styled.div`
  img {
    margin: 0 15px;
    transition: 0.5s ease-in-out;
    :hover {
      transform: scale(0.8);
    }
  }
`;
export const Menu = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;

  a {
    text-align: center;
    text-decoration: none;
    color: var(--white);
    transition: 0.5s ease-in-out;
    :hover {
      transform: scale(0.9);
    }
  }
`;
