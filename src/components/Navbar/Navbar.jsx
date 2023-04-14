import "./Navbar.css";

import { Link } from "react-router-dom";

import logo from "/logo.svg";

function Navbar() {
  return (
    <nav className="navbar d-flex py-4 px-5 pe-0">
      <div className="nav-brand">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links d-flex py-4 px-5">
        <li className="nav-link">
          <Link to="/">
            <b className="pe-1">00</b> home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/destinations">
            <b className="pe-1">01</b> destination
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/crew">
            <b className="pe-1">02</b> crew
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/technologies">
            <b className="pe-1">03</b> technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
