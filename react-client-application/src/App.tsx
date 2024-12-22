import { Button, Slider, TextField } from "@mui/material";
// import "./App.css";
import ButtonApp from "./components/ui/button-app";
import CardApp from "./components/ui/card-app";
import Header from "./components/ui/header";
import GlobalCSS from "./components/ui/testGlobalCss";

function App() {
  return (
    <>
      <CardApp />
      <LoginSection />

      <Header title={"App header"} color={"red"} />
      <Header title={"Statistics Header"} color={"green"} />
      <Header title={"About"} color={"BLUE"} />
      <h1 className="new-h1"> Test CSS ? </h1>
      <GlobalCSS />
      <ButtonApp />
      <ButtonApp theme="LIGHT" />
    </>
  );
}

function LoginSection() {
  return (
    <div>
      <div>
        <TextField id="outlined-basic" label="User" variant="outlined" />
      </div>
      <div>
        <TextField id="outlined-basic" label="password" variant="outlined" />
      </div>
      <div>
        <Button variant="text">login</Button>
      </div>
    </div>
  );
}

export default App;
