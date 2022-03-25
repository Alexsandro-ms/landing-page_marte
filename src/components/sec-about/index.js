import mars from "../img/mars.svg";
import {
  Container,
  Content,
  AsideLeft,
  AsideRight,
  Img,
  SecSlider,
  AsideLeftC,
  AsideTitle,
  AsideText,
  AsideRightC,
} from "./style";

import Logo from "../logo";
import Carousel from "../carousel";
import Title from "../title";
import H1 from "../h1";
import H3 from "../h3";

function SecAbout() {
  return (
    <Container>
      <Content>
        <AsideLeft>
          <Img src={mars} />
        </AsideLeft>
        <AsideRight>
          <Title title="Por que marte?" />
          <H1 text="Sobre o planeta vermelho" />
          <H3 text="A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera." />
          <H3 text="A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra." />
        </AsideRight>
      </Content>
      <SecSlider>
        <AsideLeftC>
          <AsideTitle>
            <Logo />
          </AsideTitle>
          <AsideText>
            <H1 text="O caminho para tornar a humanidade multiplanetária" />
            <a href="#">Inscreva-se agora</a>
          </AsideText>
        </AsideLeftC>
        <AsideRightC>
          <Carousel />
        </AsideRightC>
      </SecSlider>
    </Container>
  );
}

export default SecAbout;
