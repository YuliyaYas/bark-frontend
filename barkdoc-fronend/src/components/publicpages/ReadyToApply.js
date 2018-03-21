import React, {Component} from 'react';

class ReadyToApply extends Component {
    render(){
      return(
        <div className="content-width-40">
        <div className="center grey-font pt-26 bold margin-top-120px">Ready To Apply? </div>
        <hr className="grey-font length-40"/>
        <br />
        <button className="linked-in-button margin-left-35 white-font bold">Apply with LinkedIn</button>
        <form>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">First Name</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your first name here"/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Last Name</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your last name here"/>
          </div>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">Email</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your email here"/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Phone</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your phone here"/>
          </div>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">Recume/CV</h3>
            <textarea className="question-textarea input-text-area-91" rows="4" type="text" placeholder="Enter your message here(2000 words max)."/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Coverletter</h3>
            <textarea className="question-textarea input-text-area-91" rows="4" type="text" placeholder="Enter your message here(2000 words max)."/>
          </div>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">LinkedIn Profile</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your link here"/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Website</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your link here"/>
          </div>
          <button type="submit" className="orange white-font display-block bold submit-button">APPLY NOW</button>
        </form>
        </div>
      );
    };
};

export default ReadyToApply;
