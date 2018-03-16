import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
        <div className="content">
          <div className="header white equal-center-align">
            <div className=" float-left">
              <img className="logo" src={require(`../img/repeated/logo.png`)} alt="logo"/>
            </div>
              <div className="float-right">
                <button className="orange white-font book-button">SCHEDULE AN APPOINTMENT</button>
              </div>
              <div className="float-right">
                <a href="" className="grey-font underline sign-in-icon">SIGN IN</a>
              </div>
          </div>
      </div>
    )
  }
}

export default Header;
