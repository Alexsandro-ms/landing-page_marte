import SpaceY from "../img/logo.svg";
import styled from "styled-components";

const Logo = styled.img`
  width: 100%;
`;

export default function LogoTipo() {
  return <Logo src={SpaceY} />;
}
