import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Conteiner } from "./styles";
function Home() {
  return (
    <>
      <Helmet title="Home | Desafio Lacrei" />
      <Conteiner>
        <section className="hero">
          <h1>Bem Vindas a Lacrei Saúde</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
          <div className="links">
            <Link to="/usuario" className="btn-user">
              Pessoa Usuária
            </Link>
            <Link to="/profissional" className="btn-profissional">
              Profissional
            </Link>
          </div>
        </section>
        <div className="conteiner-img">
          <img src="./assets/home.svg" alt="Ilustração" />
        </div>
      </Conteiner>
    </>
  );
}

export default Home;
