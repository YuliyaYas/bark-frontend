import React, {Component} from 'react';

class ReadyToApply extends Component {
    render(){
      return(
        <div className="content-width-40">
        <div className="center grey-font pt-26 bold margin-top-120px">Ready To Apply? </div>
        <hr className="grey-font length-40"/>
        <button className="linked-in-button margin-left-35 white-font bold">Apply with LinkedIn</button>
        <form>
        <div className="input-49 padding-right-2 margin-bottom-20">
          <h3 className="display-block grey-font">First Name</h3>
          <input className="input-sign-in" type="text" placeholder="Enter your name here"/>
        </div>
        <div className="input-49 margin-bottom-20">
          <h3 className="display-block grey-font">Last Name</h3>
          <input className="input-sign-in" type="text" placeholder="Enter your phone here"/>
        </div>
        </form>
        </div>
      );
    };
};

export default ReadyToApply;
