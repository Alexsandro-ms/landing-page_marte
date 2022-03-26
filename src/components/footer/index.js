import {
  Container,
  Content,
  LogoContainer,
  SocialNetworks,
  Menu,
} from "./style";
import Logo from "../logo";
import Instagram from "../img/inta.png";
import Likedin from "../img/linke.png";
import Facebook from "../img/face.png";

function Footer() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SocialNetworks>
          <a href="#">
            <img src={Instagram} />
          </a>
          <a href="#">
            <img src={Likedin} />
          </a>
          <a href="#">
            <img src={Facebook} />
          </a>
        </SocialNetworks>
        <Menu>
          <a href="#">Inicio</a>
          <a href="#">Sobre nós</a>
          <a href="#">Missões</a>
          <a href="#">Contato</a>
        </Menu>
      </Content>
    </Container>
  );
}
export default Footer;
