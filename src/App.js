import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/popper.js/dist/popper'
import './App.css'
import { BsSearch } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import Sidenav from './components/Sidenav'
import Login from './components/Login'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary">
        <div className="container">
          <div className="navbar-brand"><MdLocalGroceryStore size="2rem"/></div>
          <form className="form-inline">
            <input id="inputsearch" className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button id="btnsearch" className="btn" type="submit"><BsSearch/></button>
          </form>
          <Login/>
          <button className="btn btn-info ml-auto" id="cart">View your Cart<MdLocalGroceryStore/></button>
        </div>
      </nav>
      <div id="sidenav">
        <Sidenav/>
      </div>      
    </div>
  )
}

export default App
