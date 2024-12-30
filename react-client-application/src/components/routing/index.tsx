import { Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";
import RegistrationPage from "../pages/registerPage";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";

export default function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
