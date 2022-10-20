import React from 'react';
import Button from './Button';
import Heading from './Heading';
import Link from './Link';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <Heading className={"navbar-brand"} text='Animetti'></Heading>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className={"nav-link"} text='Home'></Link>
        <Link className={"nav-link"} text='Ranking'></Link>
        <Link className={"nav-link disabled"} text='Disabled'></Link>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;