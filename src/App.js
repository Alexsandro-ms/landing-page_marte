import Stars from "./components/stars";
import SecHome from "./components/sec-home";
import SecAbout from "./components/sec-about";
import SecForm from "./components/sec-form";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
`;

function App() {
  return (
    <>
      <SecHome />
      <Content>
        <Stars />
        <SecAbout />
        <SecForm />
      </Content>
    </>
  );
}

export default App;
