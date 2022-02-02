import { useContext } from "react";
import { Context } from "../context";

const ListaPrecios = () => {
  const {
    state: { general },
    dispatch,
  } = useContext(Context);
  console.log("Username:", general.userSession);
  return (
    <section className="ListaPrecios">
      <h3>Hello ListaPrecios</h3>
    </section>
  );
};

export default ListaPrecios;
