import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usuario">Pessoa Usuária</Link>
          </li>
          <li>
            <Link to="/profissional">Profissional</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
