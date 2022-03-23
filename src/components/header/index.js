import Logo from "../img/logo.svg";
import { Container, Img } from "./style";

function header() {
  return (
    <Container>
      <Img src={Logo} />
    </Container>
  );
}
export default header;
