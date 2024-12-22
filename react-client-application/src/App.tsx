import "./App.css";
import ButtonApp from "./components/ui/button-app";
import CardApp from "./components/ui/card-app";
import Header from "./components/ui/header";
import GlobalCSS from "./components/ui/testGlobalCss";

function App() {
  return (
    <>
      <Header title={"App header"} color={"red"} />
      <Header title={"Statistics Header"} color={"green"} />
      <Header title={"About"} color={"BLUE"} />
      <h1 className="new-h1"> Test CSS ? </h1>
      <GlobalCSS />
      <ButtonApp />
      <ButtonApp theme="LIGHT" />
      <CardApp />
    </>
  );
}

export default App;
