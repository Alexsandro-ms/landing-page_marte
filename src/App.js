import Stars from "./components/stars";
import SecHome from "./components/sec-home";
import SecAbout from "./components/sec-about";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
`;

function App() {
  return (
    <>
      <SecHome />
      <Content>
        <SecAbout />
        <Stars />
      </Content>
    </>
  );
}

export default App;
