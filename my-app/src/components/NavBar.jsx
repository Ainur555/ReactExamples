import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            HomePage
          </NavLink>
        </li><li>
          <NavLink
            to={"login"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            Login
          </NavLink>
        </li>  
        <li>
          <NavLink
            to={"register"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            Register
          </NavLink>
        </li>              
      </ul>
    </nav>
  );
};