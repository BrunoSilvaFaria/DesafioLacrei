function Page(props) {
  return (
      <>
          <section className="hero">
              <h1>{props.title}</h1>
              <p>{props.paragraph}</p>
          </section>
          <img src={props.img} alt="Ilustração" />
    </>
  )
}

export default Page