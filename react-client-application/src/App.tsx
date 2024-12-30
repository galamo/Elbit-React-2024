import { BrowserRouter } from "react-router";
import { Layout } from "./components/layout";

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
