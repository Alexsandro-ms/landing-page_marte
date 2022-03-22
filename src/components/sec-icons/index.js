import { Card, Content, Img, H3 } from "./style";
import Icon01 from "../img/icon01.svg";
import Icon02 from "../img/icon02.svg";
import Icon03 from "../img/icon03.svg";

function Icons() {
  return (
    <>
      <Card>
        <Img src={Icon01} />
        <Content>
          <H3>Foguetes com a mais alta tecnologia e conforto.</H3>
        </Content>
      </Card>
      <Card>
        <Img src={Icon02} />
        <Content>
          <H3>Mais de 100 missões consecutivas com sucesso.</H3>
        </Content>
      </Card>
      <Card>
        <Img src={Icon03} />
        <Content>
          <H3>Experiencia única e exclusiva.</H3>
        </Content>
      </Card>
    </>
  );
}
export default Icons;
