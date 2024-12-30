import { Navigate, Route, Routes, useParams } from "react-router";
import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";
import RegistrationPage from "../pages/registerPage";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";
import CountriesReportsPage from "../pages/countriesReportsPage";

export default function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries-reports" element={<CountriesReportsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
