import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../stylesheet/Header.css';

class Header extends Component {
  render(){
    return(
        <div className="content">
          <div className="header white equal-center-align">
            <div className=" float-left">
              <a href="/user"><img className="logo" src={require(`../img/repeated/logo.png`)} alt="logo"/></a>
            </div>
              <div className="float-right">
                <Link to="/user/vets"> <button className="orange white-font book-button">SCHEDULE AN APPOINTMENT </button></Link>
              </div>
              <div className="float-right">
                <a href="/signin" className="grey-font underline sign-in-icon">SIGN IN</a>
              </div>
          </div>
      </div>
    );
  };
};

export default Header;
