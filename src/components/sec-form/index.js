import { Container, AsideRight, AsideLeft, Content, SmokerD } from "./style";
import Form from "../form";
import Rocket from "../img/rocket.svg";
import Smoker from "../img/smoke.svg";

function SecForm() {
  return (
    <Container>
      <Content>
        <AsideLeft>
          <Form />
        </AsideLeft>
        <AsideRight>
          <img src={Rocket} />
        </AsideRight>
      </Content>
      <SmokerD>
        <img src={Smoker} />
      </SmokerD>
    </Container>
  );
}

export default SecForm;
