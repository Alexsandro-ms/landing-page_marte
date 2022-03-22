import { Container, Button } from "./style";

function button({ text }) {
  return (
    <Container>
      <Button>{text}</Button>
    </Container>
  );
}
export default button;
