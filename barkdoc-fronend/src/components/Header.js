import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="header">
          <img src={require(`/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/logo.png`)} />
        </div>
      </div>
    )
  }
}

export default Header;
