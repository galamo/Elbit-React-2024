import { Outlet } from "react-router";

export function AuthLayout(): JSX.Element {
  return (
    <div>
      <span>This is authentication mechanisem of Elbit </span>
      
      <Outlet />
    </div>
  );
}
