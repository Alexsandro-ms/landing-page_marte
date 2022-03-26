import Ticket from "../img/ticket.svg";
import H1 from "../h1";
import H3 from "../h3";
import Button from "../button";

import { Container, Content, Label, Input, Checkbox, Span, Btn } from "./style";

function Form() {
  return (
    <Container>
      <Content>
        <img src={Ticket} />
        <H1 text="Garanta sua vaga para a primeira viagem" />
        <H3 text="Preencha os campos abaixo para entrar na lista de espera" />
        <form>
          <Label>Seu nome</Label>
          <Input type="text" required />
          <Label>E-mail</Label>
          <Input type="email" required />
          <Label>Telefone</Label>
          <Input type="tel" required />
          <Checkbox type="checkbox" />
          <Span>Concordo em receber comunicações</Span>
          <Btn>
            <Button text="Garantir minha vaga" />
          </Btn>
        </form>
      </Content>
    </Container>
  );
}

export default Form;
