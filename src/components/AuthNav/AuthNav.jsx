import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Логін
      </NavLink>
    </>
  );
}
