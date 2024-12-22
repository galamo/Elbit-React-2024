import { Button, TextField } from "@mui/material";
// import "./App.css";
import CountriesPage from "./components/pages/countriesPage";

function App() {
  return (
    <>
      <div>
        <CountriesPage />
      </div>
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
