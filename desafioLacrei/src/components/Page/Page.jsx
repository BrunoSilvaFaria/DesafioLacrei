import { Conteiner } from "./styles";
function Page(props) {
  return (
    <Conteiner>
      <section className="hero">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      </section>
      <div className="conteiner-img">
        <img src={props.img} alt="Ilustração" />
      </div>
    </Conteiner>
  );
}

export default Page;
