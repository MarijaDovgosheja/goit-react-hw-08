import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
    </nav>
  );
}
