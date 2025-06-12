import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Реєстрація</NavLink>
      <NavLink to="/login">Логін</NavLink>
    </div>
  );
}
