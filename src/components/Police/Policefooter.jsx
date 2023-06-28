import React from 'react';

function Policefooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <a className="navbar-brand" href="#">
                <span style={{ color: '#71c55d' }}>RAPTOR</span>
              </a>
              <p>
                Police websites have become a popular platform for Indian Police organizations to disseminate information and connect with the citizens through various online services.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="list-menu">
              <h4 style={{ color: '#71c55d' }}>HOME</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="list-menu">
              <h4 style={{ color: '#71c55d' }}>  CRIME 
              REPORT</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Report a Crime</a>
                </li>
                <li>
                  <a href="#">Crime Statistics</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="list-menu">
              <h4 style={{ color: '#71c55d' }}>LOGIN</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">User Login</a>
                </li>
                <li>
                  <a href="#">Admin Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="list-menu">
              <h4 style={{ color: '#71c55d' }}>CONTACT</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 RAPTOR. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <p className="text-right">
                Designed by <a href="https://www.example.com">Your Name</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Policefooter;
