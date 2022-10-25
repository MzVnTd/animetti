import React from 'react';
import Heading from './Heading';
import Link from './Link';
import Switch from './Switch';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Heading className={"navbar-brand mb-0 h1"} text='Animetti' size={"title-bg"}></Heading>
      </li>
        <li className="nav-item">
        <Link className={"nav-link"} text='Home'></Link>
        </li>
        <li className="nav-item">
        <Link className={"nav-link"} text='Ranking'></Link>
        </li>
      </ul>
        <span className="navbar-text">
          <Switch/>
        </span>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;