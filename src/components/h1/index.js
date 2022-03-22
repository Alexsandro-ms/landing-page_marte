import { Container, Title, Pointer } from "./style";

function H1({ text }) {
  return (
    <Container>
      <Title>
        {text}
        <span>.</span>
      </Title>
    </Container>
  );
}

export default H1;
