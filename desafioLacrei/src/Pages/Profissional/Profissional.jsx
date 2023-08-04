import Helmet from "react-helmet";
import Page from "../../components/Page/Page.jsx";
function Profissional() {
  return (
    <>
      <Helmet title="Profissional | Desafio Lacrei" />
      <Page
        title="Profissional"
        paragraph="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
        img="./assets/profissional.svg"
      />
    </>
  );
}

export default Profissional;
