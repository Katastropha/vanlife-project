import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

const MainNavbar = (): ReactElement => {
  return (
    <nav className="nav">
      <div>
        <NavLink className="nav_logo-link" to="/">
          #VanLife
        </NavLink>
      </div>
      <div>
        <NavLink className="nav_link" to="/about">
          About
        </NavLink>
        <NavLink className="nav_link" to="vans">
          Vans
        </NavLink>
        <NavLink className="nav_link" to="host">
          Host
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNavbar;
