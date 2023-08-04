import Helmet from "react-helmet";
import Page from "../../components/Page/Page.jsx";
function Usuario() {
  return (
    <>
      <Helmet title="Pessoa Usuária | Desafio Lacrei" />
      <Page
        title="Pessoa Usuária"
        paragraph="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        img="./assets/user.svg"
      />
    </>
  );
}

export default Usuario;
