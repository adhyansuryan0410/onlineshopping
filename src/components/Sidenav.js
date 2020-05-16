import React from 'react'
import { MdLocalGroceryStore } from 'react-icons/md'
import './css/sidenav.css'

function Sidenav() {
  return (
    <div className="col-sm-2">
      <nav className="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item item">
            <a className="nav-link">Households</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link">Veggies / Fruits</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link">Kitchen</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link">Beverages</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link">Bread and Bakery</a>
          </li> 
        </ul>
      </nav>
    </div>
  )
}

export default Sidenav
