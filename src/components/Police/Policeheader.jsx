import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Policeheader() {
  const navigate = useNavigate()
  const logout = () => {
      localStorage.removeItem("name")
      localStorage.removeItem("loginId")
      localStorage.removeItem("role")
      localStorage.removeItem("policestation_id")
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
          
          <a className="nav-link scrollto active" href="/police">
           Home
          </a>
        
        </li>
        <li>
      
          <a className="nav-link scrollto" href="/table">
         View Crime Report
          </a>
          
        </li>
      
     
        <li>
         
          <a className="nav-link scrollto" href="/criminalrecord">
          Criminal Record
          </a>
        
        </li>
        <li>
         
         <a className="nav-link scrollto" href="/policecomplaint">
         View Complaint
         </a>
       
       </li>
     
        
          <a className="nav-link scrollto" href="/about">
          About
          </a>
    
       <li>
          
       <a className="getstarted scrollto" onClick={logout}>
                                    Logout
                                </a>
         
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