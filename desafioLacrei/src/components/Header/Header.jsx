import Nav from "../Nav/Menu/Nav";
import { Conteiner } from "./styles";
function Header() {
  return (
    <Conteiner>
      <div>
        <a href="/" className="logo">
          Lacrei
        </a>
        <Nav class="menu" />
      </div>
    </Conteiner>
  );
}

export default Header;
