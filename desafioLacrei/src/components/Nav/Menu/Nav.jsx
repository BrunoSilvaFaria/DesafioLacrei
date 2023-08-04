import { NavLink } from "react-router-dom";
import { Conteiner } from "./styles";

function Nav(props) {
  return (
    <Conteiner>
      <ul className={props.class}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/usuario"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pessoa Usuária
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profissional"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profissional
          </NavLink>
        </li>
      </ul>
    </Conteiner>
  );
}

export default Nav;
