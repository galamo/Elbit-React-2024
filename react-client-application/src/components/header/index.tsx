import { NavLink } from "react-router";
import css from "./style.module.css";
export default function HeaderNavigation() {
  return (
    <div className={css.marginNavs}>
      <NavLink to={"/login"}> Login </NavLink>
      <NavLink to={"/register"}> Register </NavLink>
      <NavLink to={"/countries"}> countries </NavLink>
      <NavLink to={"/countries-reports"}> reports </NavLink>
    </div>
  );
}
