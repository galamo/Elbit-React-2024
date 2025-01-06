import { Navigate, Route, Routes } from "react-router";
// import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";
import RegistrationPage from "../pages/registerPage";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";
import CountriesReportsPage from "../pages/countriesReportsPage";
import CountryPage from "../pages/countryPage";
import { AuthLayout } from "../auth-layout";
import { AsyncProtectedRoute } from "../protected-route";
import SettingsPage from "../pages/settingsPage";
import { lazy, Suspense } from "react"
const HomePageLazy = lazy(() => {
  // @ts-ignore
  return new Promise((resolve) => setTimeout(() => resolve(import("../pages/homePage")), 5000))
  // return import("../pages/homePage")
})
const CountriesPageLazy = lazy(() => {
  return import("../pages/countriesPage")
})
export default function Routing(): JSX.Element {
  return (
    <div className="Routing">

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={
          <Suspense fallback={< MainLoader />} >
            <HomePageLazy />
          </Suspense>
        } />
        <Route path="/countries/:code" element={<CountryPage />} />
        <Route path="/countries" element={<AsyncProtectedRoute />}>
          <Route index element={
            <Suspense fallback={<MainLoader />}>
              <CountriesPageLazy />
            </Suspense>
          } />
        </Route>
        <Route path="/countries-reports" element={<CountriesReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}

export function MainLoader() {
  return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <h1 style={{ color: "blue" }}> LOADING... </h1>
  </div>
}
