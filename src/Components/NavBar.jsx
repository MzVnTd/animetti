import React from 'react';
import Heading from './Heading';
import Link from './Link';
import Switch from './Switch';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <Heading className={"navbar-brand mb-0 h1"} text='Animetti' size={"title-bg"}></Heading>
      </li>
        <li class="nav-item">
        <Link className={"nav-link"} text='Home'></Link>
        </li>
        <li lass="nav-item">
        <Link className={"nav-link"} text='Ranking'></Link>
        </li>
      </ul>
        <span class="navbar-text">
          <Switch></Switch>
        </span>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;