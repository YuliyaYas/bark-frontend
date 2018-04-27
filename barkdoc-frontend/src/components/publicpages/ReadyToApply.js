import React, {Component} from 'react';
import SuccessFormMessage from './SuccessFormMessage.js';


class ReadyToApply extends Component {
      constructor(){
        super();
        this.state = {
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          resume: "",
          coverletter: "",
          linkedin: "",
          website: "",
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
        this.setState({clicked: true}, () => console.log("click", this.state.clicked))
      }

    render(){
      return(
        <div className="content-width-40">
        {this.state.clicked === true
          ? <SuccessFormMessage />
          :
          <div>
          <div className="center grey-font pt-26 bold margin-top-120px">Ready To Apply? </div>
          <hr className="grey-font length-40"/>
          <br />
          <button className="linked-in-button margin-left-35 white-font bold">Apply with LinkedIn</button>
          <form onSubmit={this.handleSubmit}>
            <div className="input-49 padding-right-2 margin-bottom-20">
              <h3 className="display-block grey-font">First Name <span className="orange-font">*</span></h3>
              <input className="input-sign-in" type="text" name="first_name" placeholder="Enter your first name here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 margin-bottom-20">
              <h3 className="display-block grey-font" >Last Name <span className="orange-font">*</span></h3>
              <input className="input-sign-in" type="text" name="last_name" placeholder="Enter your last name here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 padding-right-2 margin-bottom-20">
              <h3 className="display-block grey-font">Email <span className="orange-font">*</span></h3>
              <input className="input-sign-in" type="text" name="email" placeholder="Enter your email here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 margin-bottom-20">
              <h3 className="display-block grey-font">Phone</h3>
              <input className="input-sign-in" type="text" name="phone" placeholder="Enter your phone here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 padding-right-2 margin-bottom-20">
              <h3 className="display-block grey-font">Resume/CV <span className="orange-font">*</span></h3>
              <textarea className="question-textarea input-text-area-91" name="resume" rows="4" type="text" placeholder="Paste your resume here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 margin-bottom-20">
              <h3 className="display-block grey-font">Coverletter</h3>
              <textarea className="question-textarea input-text-area-91" name="coverletter" rows="4" type="text" placeholder="Paste your cover letter here " onChange={this.handleChange}/>
            </div>
            <div className="input-49 padding-right-2 margin-bottom-20">
              <h3 className="display-block grey-font">LinkedIn Profile</h3>
              <input className="input-sign-in" type="text" name="linkedin" placeholder="Enter your link here" onChange={this.handleChange}/>
            </div>
            <div className="input-49 margin-bottom-20">
              <h3 className="display-block grey-font">Website</h3>
              <input className="input-sign-in" type="text" name="website" placeholder="Enter your link here" onChange={this.handleChange}/>
            </div>
            <button type="submit" className="orange white-font display-block bold submit-button">APPLY NOW</button>
          </form>
          </div>
        }
        </div>
      );
    };
};

export default ReadyToApply;
