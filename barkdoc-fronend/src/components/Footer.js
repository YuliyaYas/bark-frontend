import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="white">
        <div className="width-90">
          <div>
            <ul className="ul-style">
              <li className="li-style">
                <a href=""> About </a>
              </li>
              <li className="li-style">
                <a href=""> Press </a>
              </li>
              <li className="li-style">
                <a href=""> Careers </a>
              </li>
              <li className="li-style">
                <a href=""> Contact </a>
              </li>
              <li className="li-style">
                <a href=""> FAQ </a>
              </li>
              <li className="li-style">
                <a href=""> Testimonials </a>
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
