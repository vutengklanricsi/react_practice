import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) =>  {
  // console.log(props) // így lehet a redirectelni egy oldalra a histryok pushal
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
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

export default withRouter(Navbar); // kibontja a komponenst ez a függvény magasabb rendű komponens alkalmazza ezeket a tulajdonságokat a propsokba, hogy 
//megtegye a router-be és visszaadja a komponens-be  supercharge
// Link to - megakadályozza, hogy egy requestet küldjön a szerverbe
// Navlink -el rárak egy active class-t az anchor tagre. A link taggel nem kapjuk meg ezt az active class-t
// Navlink az akkor aktiválódik amikor rákattintunk a gombra ami átírányit a URL-be
// Navlink ez akkor hasznos amikor más stílust akarunk rárakni az aktív link-ekre