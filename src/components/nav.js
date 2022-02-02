import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Nav = ({ menu }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            {menu.home}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/precios">
            {menu.listaPrecios}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            {menu.login}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
