import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/ui/header";

function App() {
  return (
    <>
      <Header title={"App header"} color={"red"} />
      <Header title={"Statistics Header"} color={"green"} />
      <Header title={"About"} color={"BLUE"} />
    </>
  );
}

export default App;
