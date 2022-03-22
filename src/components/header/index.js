import Logo from "../img/logo.svg";
import { Container } from "./style";

function header() {
  return (
    <Container>
      <img src={Logo} />
    </Container>
  );
}
export default header;
