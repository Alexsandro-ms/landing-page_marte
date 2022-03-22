import { Card, Content, Img, H3 } from "./style";
import Icon from "../img/icon.svg";
import Icon2 from "../img/icon2.svg";
import Icon3 from "../img/icon3.svg";

function Icons() {
  return (
    <>
      <Card>
        <Img src={Icon} />
        <Content>
          <H3>Foguetes com a mais alta tecnologia e conforto.</H3>
        </Content>
      </Card>
      <Card>
        <Img src={Icon2} />
        <Content>
          <H3>Mais de 100 missões consecutivas com sucesso.</H3>
        </Content>
      </Card>
      <Card>
        <Img src={Icon3} />
        <Content>
          <H3>Experiencia única e exclusiva.</H3>
        </Content>
      </Card>
    </>
  );
}
export default Icons;
