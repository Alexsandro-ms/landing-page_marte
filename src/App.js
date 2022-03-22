import Header from "./components/header";
import Title from "./components/title";
import H1 from "./components/h1";
import H3 from "./components/h3";
import Button from "./components/button";
import SectionI from "./components/ilustration";
import SectionIcons from "./components/sec-icons";

function App() {
  return (
    <>
      <Header />
      <Title title="Finalmente é possível!" />
      <H1 text="Sua jornada para Marte começa aqui" />
      <H3 text="A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera." />
      <Button text="Inscreva-se agora" />
      <SectionI />
      <SectionIcons />
    </>
  );
}

export default App;
