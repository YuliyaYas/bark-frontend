import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../stylesheet/Header.css';

class Header extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }


  render(){
    return(
      <div className="content">
        <div className="header white equal-center-align">
          <div className="header-content">
            <div className="mobile-hamburger" onClick={this.handleClick}>
              <i className="material-icons orange-font hamburger">menu</i>
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
        {this.state.open &&
          <div className="menu font-16">
            <div className="menu-div">
              <Link to="/about" onClick={this.handleClick}>About</Link>
            </div>
            <div className="menu-div">
              <Link to="/testimonials" onClick={this.handleClick}>Testimonials</Link>
            </div>
            <div className="menu-div">
              <Link to="/faqs" onClick={this.handleClick}>FAQs</Link>
            </div>
            <div className="menu-div-last">
              <Link to="/careers" onClick={this.handleClick}>Careers</Link>
            </div>
          </div>
        }
      </div>
    );
  };
};

export default Header;
