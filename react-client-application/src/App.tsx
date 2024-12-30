import { Button, TextField } from "@mui/material";
// import "./App.css";
import CountriesPage from "./components/pages/countriesPage";
import RegistrationPage from "./components/pages/registerPage";
import { BrowserRouter } from "react-router";
import { Layout } from "./components/routing/layout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
