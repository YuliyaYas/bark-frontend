import React, {Component} from 'react';
import Header from './../Header.js';
import HaveQuestionsForm from './../HaveQuestionsForm';
import DogBottom from './../DogBottom';

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
          <div className="center grey-font pt-26 bold">Join BarkDoc</div>
          <hr className="grey-font length-11"/>
          <h2 className="orange-font">About the Team</h2>
          <p className="grey-font">Here at BarkDoc we truely care about your pets and assure they will get the most caring, smart and perfect Vet for their needs. If you’re looking to become apart of the BarkDoc team see what we have available below.</p>
          <hr className="grey-font" />
          <h2 className="grey-font bold">Veterenarian</h2>
          <hr className="grey-font"/>
          <h2 className="grey-font bold">Vet Tech</h2>
          <hr className="grey-font"/>
        </div>
        </div>
        <HaveQuestionsForm />
        <DogBottom />
      </div>
    );
  };
};

export default Careers;
