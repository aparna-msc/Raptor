import React from 'react'
import { Link } from 'react-router-dom'

function Policeheader() {
  return (
    <div>
        <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
    <div id="logo"></div>
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <Link to={"/"}>
          <a className="nav-link scrollto active" href="">
            Home
          </a>
          </Link>
        </li>
        <li>
          <Link to={"crimereport"}>
          <a className="nav-link scrollto" href="">
          crime report
          </a>
          </Link>
        </li>
        <li>
          <Link to={"crimestatus"}>
          <a className="nav-link scrollto" href="">
            crime status
          </a>
          </Link>
        </li>
     
        <li>
          <Link to={"criminalrecord"}>
          <a className="nav-link scrollto" href="">
            criminal record
          </a>
          </Link>
        </li>
        <li>
          <Link to={"login"}>
          <a className="nav-link scrollto" href="">
          Login
          </a>
          </Link>
        </li>
        <li>
          <Link to={"register"}>
          <a className="nav-link scrollto" href="">
            Register
          </a>
          </Link>
        </li>
        <Link to={"about"}>
          <a className="nav-link scrollto" href="#about">
            About
          </a>
          </Link>
       <li>
        <Link to={"contact"}>
          <a className="nav-link scrollto" href="#contact">
            Contact
          </a>
          </Link>
       </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {/* .navbar */}
  </div>
</header>

    </div>
  )
}

export default Policeheader