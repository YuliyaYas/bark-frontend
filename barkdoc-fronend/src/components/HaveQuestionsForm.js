import React, {Component} from 'react';
import './../stylesheet/HaveQuestions.css';

class HaveQuestionsForm extends Component {
  render(){
    return(
      <div className="content-width">
        <div className="center grey-font pt-26 bold padding-top-60">Have Questions?</div>
        <hr className="grey-font length-40"/>
        <form>
          <h3 className="display-block grey-font">Email Address</h3>
          <input className="input-sign-in" type="text" placeholder="Enter your email address here"/>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">Full Name</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your name here"/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Phone</h3>
            <input className="input-sign-in" type="text" placeholder="Enter your phone here"/>
          </div>
          <div className="display-block">
            <h3 className="grey-font">Message</h3>
            <textarea className="question-textarea input-text-area" rows="4" type="text" placeholder="Enter your message here(2000 words max)."/>
          </div>
          <button type="submit" className="orange white-font display-block bold submit-button">SUBMIT</button>
        </form>
        <div className="center">
          <h1 className="grey-font bold">or Call</h1>
          <h1 className="orange-font bold font-24pt">1-855-VETS-266</h1>
          <h1 className="orange-font bold font-15pt"> Mon-Fri • 9AM-9PM</h1>
          <p className="grey-font font-14pt">1-855-838-7266 </p>
        </div>
      </div>
    );
  };
};

export default HaveQuestionsForm;
