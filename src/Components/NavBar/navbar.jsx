import React from 'react'
import Cartwidget from '../Cartwidget/cartwidget';


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Valiendo Burguer</a>
          <button className="navbar-toggler" type="button">
            <Cartwidget />
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/category/Hamburguesas de carne">Hamburguesas de carne</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/category/Hamburguesas veganas">Hamburguesas veganas</a>
              </li>
              <li className="nav-item">
                <a  className="nav-link active" href="/category/Combos">Combos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;