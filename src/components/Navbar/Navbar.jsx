import "./Navbar.css";

import { Link } from "react-router-dom";

import logo from "/logo.svg";

function Navbar() {
  return (
    <nav class="navbar d-flex py-4 px-5 pe-0">
      <div class="nav-brand">
        <img src={logo} alt="logo" />
      </div>
      <ul class="navbar-links d-flex py-4 px-5">
        <li class="nav-link">
          <Link to="/">
            <b class="pe-1">00</b> home
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/destinations">
            <b class="pe-1">01</b> destination
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/crew">
            <b class="pe-1">02</b> crew
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/technologies">
            <b class="pe-1">03</b> technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
