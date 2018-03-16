import React, { Component } from 'react';

class SignIn extends Component {
  render(){
    return(
      <div>
      <div className="sign-in-form">
        <h1 className="center grey-font">Sign in Below</h1>
        <hr className="grey-font length"/>
        <button id="facebook-login">Login with Facebook</button>
        <label>Email Address</label>
        <br />
        <input type="text" defaultValue="Enter your email address here"/>
        <br />
        <label>Password</label>
        <br />
        <input type="password" defaultValue="Enter your password here"/>
        <br />
        <button className="orange white-font">SIGN IN</button>
      </div>
      <div>
        <img className="dog-bottom-img" alt="" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/dog_bottom.png")}/>
      </div>
      </div>
    )
  }
}

export default SignIn;
