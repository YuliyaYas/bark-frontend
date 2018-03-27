import React, { Component } from 'react';
import './../stylesheet/Header.css';

class Header extends Component {
  render(){
    return(
        <div className="content">
          <div className="header white equal-center-align">
            <div className=" float-left">
              <a href="http://localhost:3001/user"><img className="logo" src={require(`../img/repeated/logo.png`)} alt="logo"/></a>
            </div>
              <div className="float-right">
                <button className="orange white-font book-button">SCHEDULE AN APPOINTMENT</button>
                <button className="orange-font book-button-mobile">BOOK APPT.</button>
              </div>
              <div className="float-right">
                <a href="" className="grey-font underline sign-in-icon">SIGN IN</a>
              </div>
          </div>
      </div>
    );
  };
};

export default Header;
