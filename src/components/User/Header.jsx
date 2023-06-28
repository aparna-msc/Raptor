import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const logout = () => {
      localStorage.removeItem("name")
      localStorage.removeItem("loginId")
      localStorage.removeItem("role")
      localStorage.removeItem("userid")
      navigate('/')}
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
        
       
          <a className="nav-link scrollto active" href="/userhome">
          Home
          </a>
         
        </li>
        <li>
          
          <a className="nav-link scrollto" href="/crimereport">
           Crime report
          </a>
         
        </li>
        <li>
         
          <a className="nav-link scrollto" href="/crimestatus">
           View Crime Status
          </a>
         
        </li>
        <li>
         
         <a className="nav-link scrollto" href="/usercomplaint">
          Complaint
         </a>
        
       </li>
       <li>
         
         <a className="nav-link scrollto" href="/userviewreplay">
        View Replay
         </a>
        
       </li>
        
        <li>
         
          <a className="nav-link scrollto" href="/about">
          About
          </a>
         
        </li>
       
        <li>
        <a className="getstarted scrollto" onClick={logout}>
                                    Logout
                                </a>
       
        </li>
      
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
   
  </div>
</header>

    </div>
  )
}

export default Header