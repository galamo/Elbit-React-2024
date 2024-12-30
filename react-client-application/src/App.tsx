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
