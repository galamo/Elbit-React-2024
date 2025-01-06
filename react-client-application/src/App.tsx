import { BrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { createContext, Suspense } from "react";
import SettingsProvider from "./context/settingsProvider";

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
        <Suspense fallback={<h1 style={{ color: "red" }}> LOADING... </h1>}>
          <SettingsProvider>
            <AppDateContext.Provider value={{ format: "dd/MMM/yy", isUtc: true }}>
              <BrowserRouter>
                <Layout />
              </BrowserRouter>
            </AppDateContext.Provider>
          </SettingsProvider>
        </Suspense>
      </div>
    </>
  );
}

export default App;
