import React, { Component } from 'react';
import './../../src/stylesheet/Footer.css';

class Footer extends Component {
  render(){
    return(
      <div className="white footer">
        <div className="width-90 footer">
          <div>
          <div className="float-right-footer">
            <ul className="ul-style-r">

              <li className="li-style-r">
              <a href="https://www.instagram.com/barkdoc/"> <img className="icon" src={require("../img/instagram-icon.png")} alt="" /> </a>
              </li>

              <li className="li-style-r">
                <a href="https://www.facebook.com/BARKDOC/​"> <img className="icon" src={require("../img/facebook-icon.png")} alt="" /> </a>
              </li>

            </ul>
          </div>
            <ul className="ul-style">
              <li className="li-style">
                <a href="/about"> About </a>
              </li>
              <li className="li-style">
                <a href="/careers"> Careers </a>
              </li>
              <li className="li-style">
                <a href="/contact"> Contact </a>
              </li>
              <li className="li-style">
                <a href="/faqs">FAQ</a>
              </li>
              <li className="li-style">
                <a href="/testimonials"> Testimonials </a>
              </li>
            </ul>
          </div>

        <div>
        <ul className="ul-style smaller">
          <li className="li-style wider">
            <a href="">® 2018 BarkDoc™</a>
          </li>
          <li className="li-style">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="li-style wider">
            <a href="/terms-of-use"> Terms of Use</a>
          </li>
        </ul>
        </div>
        </div>
      </div>
    );
  };
};

export default Footer;
