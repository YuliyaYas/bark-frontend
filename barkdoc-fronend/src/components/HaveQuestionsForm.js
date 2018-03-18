import React, {Component} from 'react';

class HaveQuestionsForm extends Component {
  render(){
    return(
      <div className="content-width">
        <div className="center grey-font pt-26 bold padding-top-60">Have Questions?</div>
        <hr className="grey-font length-40"/>
        <form>
          <h3 className="display-block grey-font">Email Address</h3>
          <input className="input-sign-in" type="text" placeholder="Enter your email address here"/>
          <div className="input-49 padding-right-2">
            <h3 className="display-block grey-font">Full Name</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your name here"/>
          </div>
          <div className="input-49">
            <h3 className="display-block grey-font">Phone</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your phone here"/>
          </div>
            <h3 className="display-block grey-font">Message</h3>
            <textarea className="question-textarea" rows="4" className="input-text-area" type="text" placeholder="Enter your message here(2000 words max)."/>
          <button type="submit" className="orange white-font display-block sign-in-button">SUBMIT</button>
        </form>
      </div>
    );
  };
};

export default HaveQuestionsForm;
