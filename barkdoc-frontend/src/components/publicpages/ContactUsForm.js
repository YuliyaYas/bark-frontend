import React, {Component} from 'react';
import SuccessFormMessage from './SuccessFormMessage';

class ContactUsForm extends Component{
  constructor(){
    super();
    this.state={
      email: '',
      name: '',
      clicked: false,
      selectedOption: 'vet'
    };
  };


  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return { [name]: value };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.state.clicked = false
    this.setState({clicked: true})
  }

  handleRadioChange = (e) => {
    this.setState({selectedOption: e.target.value})
  }

  render(){
    console.log(this.state);
    return(
      <div className="width-25 margin-left-37">
        {this.state.clicked === true
          ? <SuccessFormMessage />
          :
          <div>
            <div className="center grey-font pt-26 bold padding-top-60">Contact Us</div>
            <hr className="grey-font length-11"/>
            <form onSubmit={this.handleSubmit}>
              <h3 className="display-block grey-font" ><span className="orange-font">*</span>Email Address</h3>
              <input className="input-sign-in" name="email" type="text" placeholder="Enter your email address here" required onChange={this.handleChange}/>
              <h3 className="display-block grey-font" ><span className="orange-font">*</span>Your Name</h3>
              <input className="input-sign-in" name="name" type="text" placeholder="Enter your name here" onChange={this.handleChange}/>
              <h3 className="display-block grey-font"><span className="orange-font">*</span>Are You a Veterinarian, or Patient?</h3>
              <label className="bold grey-font margin-right-10px">
              <input type='radio' name="user" onChange={this.handleRadioChange} value="vet"  checked={this.state.selectedOption === 'vet'}/>Veterinarian</label>
              <label className="bold grey-font">
              <input type='radio' name="user" onChange={this.handleRadioChange} value="patient" checked={this.state.selectedOption === 'patient'}/>Patient</label>
              <h3 className="grey-font"><span className="orange-font">*</span>Message</h3>
              <textarea className="question-textarea input-text-area" rows="4" type="text" name="message" placeholder="Enter your message here(2000 words max)." required onChange={this.handleChange}/>
              <button type="submit" className="orange white-font display-block sign-in-button bold">SEND NOW</button>
            </form>
          </div>
        }
      </div>
    );
  };
};

export default ContactUsForm;
