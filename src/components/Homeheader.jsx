import React from 'react'
import { Link } from 'react-router-dom'

function Homeheader() {

  return (
    <div>
        <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
  <div id="logo">
  <h1>
    <a href="index.html">
      <span>R</span>APTOR
    </a>
  </h1>
</div>

    <nav id="navbar" className="navbar">
      <ul>
        <li>
         
       
          <a className="nav-link scrollto active" href="/Log">
            Login
          </a>
         
        </li>
        <li className="dropdown">
  <a href="#">
    <span>Register</span> <i className="bi bi-chevron-down" />
  </a>
  <ul>
    <li>
      <a href="Reg">USER</a>
    </li>
    <li>
      <a href="/Reg1">POLICE STATION</a>
    </li>
    <li className="dropdown">
      
      <ul>
       
        <li>
          <a href="#">POLICE STATION</a>
        </li>
        
       
      </ul>
    </li>
   
   
    
  </ul>
</li>

        {/* <li>
          <Link to={"crimereport"}>
          <a className="nav-link scrollto" href="">
            crime report
          </a>
          </Link>
        </li> */}
        {/* <li>
          <Link to={"crimestatus"}>
          <a className="nav-link scrollto" href="">
            crime status
          </a>
          </Link>
        </li> */}
        
        {/* <li>
          <Link to={"register"}>
          <a className="nav-link scrollto" href="">
            Register
          </a>
          </Link>
        </li> */}
        {/* <li>
          <Link to={"about"}>
          <a className="nav-link scrollto" href="">
            About
          </a>
          </Link>
        </li> */}
        {/* <li>
          <Link to={"contact"}>
          <a className="nav-link scrollto" href="#contact">
            Contact
          </a>
          </Link>
        </li>
        <li> */}
          {/* <Link to={"login"}>
          <a className="nav-link scrollto" href="">
         Logout
          </a>
          </Link>
        </li> */}
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {/* .navbar */}
  </div>
</header>

    </div>
  )
}

export default Homeheader