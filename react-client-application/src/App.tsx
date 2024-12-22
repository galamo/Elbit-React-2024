import "./App.css";
import { ButtonAppsExamples } from "./components/ui/button";
import Header from "./components/ui/header";

function App() {
  return (
    <>
      <Header title={"App header"} color={"red"} />
      <Header title={"Statistics Header"} color={"green"} />
      <Header title={"About"} color={"BLUE"} />
      <ButtonAppsExamples />
    </>
  );
}

export default App;
