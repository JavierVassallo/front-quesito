import { useContext, useEffect } from "react";
import { Context } from "../context";
import { actionsCreator } from "../context/general/actions";

const Login = () => {
  const {
    state: { general },
    dispatch,
  } = useContext(Context);
  console.log("Nombre:", general.prueba.name);
  console.log("Username:", general.userSession);
  useEffect(() => {
    dispatch(
      actionsCreator.toggleUserSession({
        user: "aojkdnsalkdm",
        token: "123456",
      })
    );
  }, []);
  return (
    <section className="Login">
      <h3>Hello Login</h3>
    </section>
  );
};

export default Login;
