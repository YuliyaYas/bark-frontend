import React, { Component } from 'react';
import './../../src/stylesheet/Footer.css';

class Footer extends Component {
  render(){
    return(
      <div className="white">
        <div className="width-90">
          <div>
            <ul className="ul-style">
              <li className="li-style">
                <a href="http://localhost:3001/about"> About </a>
              </li>
              <li className="li-style">
                <a href=""> Press </a>
              </li>
              <li className="li-style">
                <a href="http://localhost:3001/careers"> Careers </a>
              </li>
              <li className="li-style">
                <a href="http://localhost:3001/contact"> Contact </a>
              </li>
              <li className="li-style">
                <a href="http://localhost:3001/faqs"> FAQ </a>
              </li>
              <li className="li-style">
                <a href="http://localhost:3001/testimonials"> Testimonials </a>
              </li>
              <li className="li-style">
                <a href=""> Pricing </a>
              </li>
              <li className="li-style">
                <a href=""> Trasted Partners </a>
              </li>
            </ul>
          </div>
        <div>
        <ul className="ul-style">
          <li className="li-style">
            <a href="">® 2018 BarkDoc™</a>
          </li>
          <li className="li-style">
            <a href="">Privacy</a>
          </li>
          <li className="li-style">
            <a href=""> Terms of Use</a>
          </li>
        </ul>
        </div>
        </div>
      </div>
    );
  };
};

export default Footer;
