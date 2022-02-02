import { useReducer } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./views/home";
import ListaPrecios from "./views/listaPrecios";
import Login from "./views/login";

import { Context, globalState, generalReducer } from "./context";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(generalReducer, globalState);

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/precios" element={<ListaPrecios />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
