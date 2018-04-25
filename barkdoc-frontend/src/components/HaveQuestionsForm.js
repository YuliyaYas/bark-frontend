import React, {Component} from 'react';
import './../stylesheet/HaveQuestions.css';
import SuccessFormMessage from '../components/publicpages/SuccessFormMessage.js';

class HaveQuestionsForm extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      name: "",
      phone: "",
      message: "",
      clicked: false
    };
  };

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return { [name]: value };
    }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.state.clicked = false
    this.setState({clicked: true})
  }



  render(){
      console.log(this.state);
    return(
      <div className="questions">
        <div className="zig-zag-gray"></div>
        <div className="content-width">
          {this.state.clicked === true
            ?
            <SuccessFormMessage />
            :
            <div>
            <div className="center grey-font pt-26 bold padding-top-60">Have Questions?</div>
            <hr className="grey-font length-40"/>
            <form onSubmit={this.handleSubmit}>
              <h3 className="display-block grey-font"><span className="orange-font">*</span>Email Address</h3>
              <input className="input-sign-in" type="text" name="email" placeholder="Enter your email address here" required onChange={this.handleChange}/>
              <div className="input-49 padding-right-2 margin-bottom-20">
                <h3 className="display-block grey-font"><span className="orange-font">*</span>Full Name</h3>
                <input className="input-sign-in" type="text" name="name" placeholder="Enter your name here" required onChange={this.handleChange}/>
              </div>
              <div className="input-49 margin-bottom-20">
                <h3 className="display-block grey-font"><span className="orange-font">*</span>Phone</h3>
                <input className="input-sign-in" type="text" name="phone" placeholder="Enter your phone here" required onChange={this.handleChange}/>
              </div>
              <div className="display-block">
                <h3 className="grey-font"><span className="orange-font">*</span>Message</h3>
                <textarea className="question-textarea input-text-area" name="message" rows="4" type="text" placeholder="Enter your message here(2000 words max)." onChange={this.handleChange}/>
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
          }

        </div>
      </div>
    );
  };
};

export default HaveQuestionsForm;
