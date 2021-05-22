import React from 'react';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'react-router-dom'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          <Link style={{textDecoration:'none'}} to='/'>
            <li className="nav-item">
              <a id="contact" className="nav-link">HOME</a>
            </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Guides</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#teams">Our team</a>
            </li> */}
            <Link style={{textDecoration:'none'}} to='/mycard'>
            <li className="nav-item">
              <a id="contact" className="nav-link">my card</a>
            </li>
            </Link>
            

              <Link style={{textDecoration:'none'}}to='/contactus'>
              <li className="nav-item">
                <a id="contact" className="nav-link">Contact us</a>
                </li>
              </Link>

            
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar