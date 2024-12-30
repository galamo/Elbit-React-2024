import { BrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { createContext } from "react";

interface IAppDateContext {
  format: string;
  isUtc: boolean;
}

export const AppDateContext = createContext<IAppDateContext>({
  format: "yyyy-MMM-dd",
  isUtc: false,
});

function App() {
  return (
    <>
      <div>
        <AppDateContext.Provider value={{ format: "dd/MMM/yy", isUtc: true }}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </AppDateContext.Provider>
      </div>
    </>
  );
}

export default App;
