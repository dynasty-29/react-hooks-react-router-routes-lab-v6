import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;
