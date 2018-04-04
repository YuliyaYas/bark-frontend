import React, {Component} from 'react';
import Header from './../Header';
import TestimonialCard from './TestimonialCard';
import VetCard from './VetCard';
import Overlay1 from './Overlay1';
import HaveQuestionsForm from './../HaveQuestionsForm.js'
import DogBottom from './../DogBottom.js';
import './../../stylesheet/Vet.css';

class Vets extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log("test", this.props.selectLocationClick)
    const testimonials = this.props.testimonials.map((testimonial,i)=>{
      if(i<4){
       return <TestimonialCard key={i} testimonial = {testimonial} />
    }})


    return(
      <div>
          <div className="background-bookings container-pattern-zig-zag">
            <Header />
            <h1 className="white-font bold content padding-career">Book an Appointment</h1>
          </div>
          {this.props.selectLocationClick===true ? "" : <Overlay1 handleContinueLocation={this.props.handleContinueLocation} handleSelectChange={this.props.handleSelectChange} handleLocationButton={this.props.handleLocationButton}/>}
          <div className="white">
          <div className="content" >
          <div className="row">
            <div className="column-65">
              <div className="row">
                <div className="column-45">
                  <h3 className=" grey-font">My Pet Needs:</h3>
                  <div className="select">
                    <select className="styled-select grey-font bold">
                      <option value="check-up">Check-up</option>
                      <option value="check-up">Check-up</option>
                      <option value="check-up">Check-up</option>
                      <option value="check-up">Check-up</option>
                      <option value="check-up">Check-up</option>
                    </select>
                    <div className="select_arrow">
                    </div>
                  </div>
                </div>

                <div className="column-45">
                  <h3 className=" grey-font">My Pets Location:</h3>
                    <div className="select">
                      <select className="styled-select grey-font bold">
                        <option value="check-up">location 1</option>
                        <option value="check-up">location 2</option>
                        <option value="check-up">location 3</option>
                        <option value="check-up">location 4</option>
                        <option value="check-up">location 5</option>
                      </select>
                      <div className="select_arrow">
                      </div>
                    </div>
                </div>
              </div>
                <VetCard />
                <VetCard />
                <VetCard />
                <VetCard />
                <VetCard />

            </div>
            <div className="column-20">
              <h2 className="grey-font center">Testimonials</h2>
              <hr className="grey-font length-11"/>
                {this.props.testimonials.length > 0
              ?
                testimonials
              :
                ""
              }
            </div>
          </div>
          </div>
          </div>
        <div className="container-grey-zig-zag"></div>
        <HaveQuestionsForm />
        <DogBottom />
      </div>
    );
  };
};

export default Vets;
