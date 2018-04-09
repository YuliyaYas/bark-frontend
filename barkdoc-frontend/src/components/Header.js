import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../stylesheet/Header.css';

class Header extends Component {
  render(){
    return(
      <div className="content">
        <div className="header white equal-center-align">
          <div className="header-content">
            <div className="mobile-hamburger">
              <i class="material-icons orange-font hamburger">menu</i>
            </div>
            <div className="float-left">
              <a href="/"><img className="logo" src={require(`../img/repeated/logo.png`)} alt="logo"/></a>
            </div>
            <div className="float-right">
              <Link to="/vets"> <button className="orange white-font book-button">SCHEDULE AN APPOINTMENT </button></Link>
              <Link to="/vets"> <button className="orange-font book-button-mobile">Book Appt </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;
