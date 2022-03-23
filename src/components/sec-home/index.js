import Header from "../header";
import Title from "../title";
import H1 from "../h1";
import H3 from "../h3";
import Button from "../button";
import SectionI from "../ilustration";
import SectionIcons from "../sec-icons";

import { Container, AsideLeft, AsideRight, Row, Content } from "./style";

function SecHome() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <AsideLeft>
            <Title title="Finalmente é possível!" />
            <H1 text="Sua jornada para Marte começa aqui" />
            <H3 text="A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera." />
            <Button text="Inscreva-se agora" />
          </AsideLeft>
          <AsideRight>
            <SectionI />
          </AsideRight>
        </Content>
      </Container>
      <Row>
        <SectionIcons />
      </Row>
    </>
  );
}
export default SecHome;
