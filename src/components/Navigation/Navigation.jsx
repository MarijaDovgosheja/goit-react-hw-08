import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Головна
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Контакти
      </NavLink>
    </>
  );
}
