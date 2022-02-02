import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Nav from "./nav";

test("renders content", () => {
  const menu = {
    home: "Home",
    listaPrecios: "Lista de precios",
    login: "Login",
  };

  const component = render(<Nav menu={menu} />);
  component.getAllByText("Home");
});
