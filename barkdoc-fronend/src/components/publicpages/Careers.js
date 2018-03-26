import React, {Component} from 'react';
import Header from './../Header.js';
import HaveQuestionsForm from './../HaveQuestionsForm';
import DogBottom from './../DogBottom';
import '/Users/yuliya/bark-frontend/barkdoc-fronend/src/stylesheet/Career.css';

class Careers extends Component {
  render(){
    return(
      <div>
        <div className="background-three-dog container-pattern-zig-zag">
          <Header />
          <h1 className="white-font content bold padding-career">Careers</h1>
        </div>
        <div className="white">
        <div className="content">
        <div className="margin-right-left">
          <div className="center grey-font pt-26 bold">Join BarkDoc</div>
          <hr className="grey-font length-11"/>
          <h2 className="orange-font pt-20">About the Team</h2>
          <p className="grey-font pt-14">Here at BarkDoc we truely care about your pets and assure they will get the most caring, smart and perfect Vet for their needs. If you’re looking to become apart of the BarkDoc team see what we have available below.</p>
          <hr className="grey-font" />
          <div className="row">
            <div className="margin-20 column-job-name"><span className="grey-font bold  pt-14">Veterenarian </span><span className="light-grey-font bold font-9">New York, NY</span></div>
            <button className="float-right column-button button-apply-now-grey white-font bold">APPLY NOW</button>
          </div>
          <hr className="grey-font"/>
          <div className="row">
            <div className="margin-20 column-job-name"><span className="grey-font bold  pt-14">Vet Tech </span><span className="light-grey-font bold font-9 ">New York, NY</span></div>
            <button className="float-right column-button button-apply-now-orange white-font bold">APPLY NOW</button>
          </div>
          <hr className="grey-font"/>
          <br />
        </div >
        </div>
        </div>
        <div className="container-grey-zig-zag" />
        <HaveQuestionsForm />
        <DogBottom />
      </div>
    );
  };
};

export default Careers;
