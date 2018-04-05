import React, {Component} from 'react';
import './../stylesheet/HaveQuestions.css';

class HaveQuestionsForm extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      name: "",
      phone: "",
      message: ""
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
  }


  render(){
      console.log(this.state);
    return(
      <div className="content-width">

            <iframe height="557"
                    allowTransparency="true"
                    frameborder="0"
                    scrolling="no"

                    src="https://barkdog.wufoo.com/embed/zf0l0be06tlcx0/">
              <a href="https://barkdog.wufoo.com/forms/zf0l0be06tlcx0/">
                Fill out my Wufoo form!
              </a>
            </iframe>

        <div className="center grey-font pt-26 bold padding-top-60">Have Questions?</div>
        <hr className="grey-font length-40"/>
        <form onSubmit={this.handleSubmit}>
          <h3 className="display-block grey-font">Email Address</h3>
          <input className="input-sign-in" type="text" name="email" placeholder="Enter your email address here" required onChange={this.handleChange}/>
          <div className="input-49 padding-right-2 margin-bottom-20">
            <h3 className="display-block grey-font">Full Name</h3>
            <input className="input-sign-in" type="text" name="name" placeholder="Enter your name here" required onChange={this.handleChange}/>
          </div>
          <div className="input-49 margin-bottom-20">
            <h3 className="display-block grey-font">Phone</h3>
            <input className="input-sign-in" type="text" name="phone" placeholder="Enter your phone here" required onChange={this.handleChange}/>
          </div>
          <div className="display-block">
            <h3 className="grey-font">Message</h3>
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
    );
  };
};

export default HaveQuestionsForm;
