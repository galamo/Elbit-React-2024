import { BrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { createContext } from "react";
import SettingsProvider from "./context/settingsProvider";
import ErrorBoundary from "./components/error/error";

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
        <SettingsProvider>
          <AppDateContext.Provider value={{ format: "dd/MMM/yy", isUtc: true }}>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </AppDateContext.Provider>
        </SettingsProvider>
      </div>
    </>
  );
}

export default App;
