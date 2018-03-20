import React, { Component } from 'react';
import Header from './../Header.js';

class SignIn extends Component {
  render(){
    return(
      <div>
      <Header />
      <div className="sign-in-form content">
        <h1 className="center grey-font pt-26">Sign in Below</h1>
        <hr className="grey-font length"/>
        <button id="facebook-login">Login with Facebook</button>
        <h2 className="display-block line"><span className="grey-font or-span">or</span></h2>
        <h3 className="display-block grey-font">Email Address</h3>
        <input className="input-sign-in" type="text" placeholder="Enter your email address here"/>
        <h3 className="display-block grey-font">Password</h3>
        <input className="input-sign-in" type="password" placeholder="Enter your password here"/>
        <button className="orange white-font display-block sign-in-button">SIGN IN</button>
      </div>
      <div>
        <img className="dog-bottom-img" alt="" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/dog_bottom.png")}/>
      </div>
      </div>
    );
  };
};

export default SignIn;
