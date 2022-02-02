import Nav from "../components/nav";

const Home = () => {
  const menu = {
    home: "Home",
    listaPrecios: "Lista de precios",
    login: "Login",
  };
  return (
    <section className="Home">
      <h3>Hello Home</h3>
      <Nav menu={menu} />
    </section>
  );
};

export default Home;
