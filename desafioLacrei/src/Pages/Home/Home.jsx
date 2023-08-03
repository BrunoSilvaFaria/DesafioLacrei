import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Bem Vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

        <div className="links">
          <Link to="/usuario">Pessoa Usuária</Link>
          <Link to="/profissional">Profissional</Link>
        </div>
      </section>
      <img src="" alt="Ilustração" />
    </>
  );
}

export default Home;
