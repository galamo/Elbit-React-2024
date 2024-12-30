import { Navigate, Route, Routes, useParams } from "react-router";
import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";
import RegistrationPage from "../pages/registerPage";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";
import CountriesReportsPage from "../pages/countriesReportsPage";
import CountryPage from "../pages/countryPage";
import { AuthLayout } from "../auth-layout";
import { AsyncProtectedRoute } from "../protected-route";

export default function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries/:code" element={<CountryPage />} />
        <Route path="/countries" element={<AsyncProtectedRoute />}>
          <Route index element={<CountriesPage />} />
        </Route>
        <Route path="/countries-reports" element={<CountriesReportsPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
