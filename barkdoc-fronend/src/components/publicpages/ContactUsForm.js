import React, {Component} from 'react';

class ContactUsForm extends Component{
  render(){
    return(
      <div className="width-25 margin-left-37">
      
        <div className="center grey-font pt-26 bold padding-top-60">Contact Us</div>
        <hr className="grey-font length-11"/>
        <form>
          <h3 className="display-block grey-font">Email Address</h3>
          <input className="input-sign-in" type="text" placeholder="Enter your email address here"/>
          <h3 className="display-block grey-font">Password</h3>
          <input className="input-sign-in" type="password" placeholder="Enter your password here"/>
          <h3 className="display-block grey-font">Are You a Veterinarian, or Patient?</h3>
          <label className="bold grey-font margin-right-10px"><input type="radio" name="customer-type" />Veterinarian</label>
          <label className="bold grey-font"><input type="radio" name="customer-type" />Patient</label>
          <h3 className="grey-font">Message</h3>
          <textarea className="question-textarea input-text-area" rows="4" type="text" placeholder="Enter your message here(2000 words max)."/>
          <button className="orange white-font display-block sign-in-button bold">SEND NOW</button>
        </form>
      </div>
    );
  };
};

export default ContactUsForm;
