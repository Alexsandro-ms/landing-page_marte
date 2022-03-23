import stars from "../img/starts.svg";
import styled from "styled-components";

const Stars = styled.img`
  width: 100%;
  height: 100vh;
  z-index: 99999999999;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default function StarsWallpaper() {
  return <Stars src={stars} />;
}
