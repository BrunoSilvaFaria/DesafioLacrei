import Nav from "../Nav/Menu/Nav";
import Social from "../Nav/Social/Social";
import { Conteiner } from "./styles";
function Footer() {
  return (
    <Conteiner>
      <section className="footer-conteiner">
        <Nav class="footer" />
        <Social />
        <p>Desafio Front-end Lacrei</p>
      </section>
    </Conteiner>
  );
}

export default Footer;
