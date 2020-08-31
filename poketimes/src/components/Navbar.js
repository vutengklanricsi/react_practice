import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () =>  {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
// Link to - megakadályozza, hogy egy requestet küldjön a szerverbe
// Navlink -el rárak egy active class-t az anchor tagre. A link taggel nem kapjuk meg ezt az active class-t
// Navlink az akkor aktiválódik amikor rákattintunk a gombra ami átírányit a URL-be
// Navlink ez akkor hasznos amikor más stílust akarunk rárakni az aktív link-ekre