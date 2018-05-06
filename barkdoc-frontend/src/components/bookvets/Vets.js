import React, {Component} from 'react';
import Header from './../Header';
import TestimonialCard from './TestimonialCard';
import FakeVetCard from './FakeVetCard';
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
    const testimonials = this.props.testimonials.map((testimonial,i)=>{
      if(i<4){
       return <TestimonialCard key={i} testimonial = {testimonial} />
    }})

    const vets = this.props.vets.map((vet,i) => <VetCard handleVetClick={this.props.handleVetClick} vet={vet} key={i}/>)

    const locations = this.props.allLocations.filter(loc => loc.id!=this.props.selectedLocationId).map((loc,i) => <option value={loc.id} name={loc.nickname} key={i}>{loc.nickname}</option>)

    return(
      <div>
          <div className="background-bookings container-pattern-zig-zag">
            <Header />
            <h1 className="white-font bold content padding-career">Book an Appointment</h1>
          </div>
          {this.props.selectLocationClick===true ? "" : <Overlay1 allLocations={this.props.allLocations} handleContinueLocation={this.props.handleContinueLocation} handleSelectChange={this.props.handleSelectChange} handleLocationButton={this.props.handleLocationButton} location={this.props.location} />}
          <div className="white ready">
          <div className="content vet-content" >
          <div className="row">
            <div className="column-65">
              <div className="row">
                <div className="column-45">
                  <div className="needs">
                    <h3 className=" grey-font">My Pet Needs:</h3>
                    <div className="select">
                      <select className="styled-select grey-font bold">
                        <option value="check-up">Visit with Comprehensive Exam</option>
                        <option value="check-up">Visit with Lab Work</option>
                        <option value="check-up">Visit with Senior Lab Work</option>
                        <option value="check-up">Fecal Parasite Screening</option>
                        <option value="check-up">Heartworm Test</option>
                      </select>
                      <div className="select_arrow">
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column-45">
                  <div className="location">
                    <h3 className="grey-font">My Pets Location:</h3>
                    <div className="select">
                      <select className="styled-select grey-font bold" onChange={this.props.handleLocationChange} value={this.props.selectedLocationId}>
                        <option value={this.props.selectedLocationId}>{this.props.selectedLocationName}</option>
                        {locations}
                      </select>
                      <div className="select_arrow">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                {this.props.vets.length > 0
                  ?
                  vets
                  :
                <div>
                  <FakeVetCard />
                  <FakeVetCard />
                  <FakeVetCard />
                  <FakeVetCard />
                  <FakeVetCard />
                </div>
              }

            </div>
            <div className="column-20 testimonial-card">
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

        <HaveQuestionsForm />
        <DogBottom />
      </div>
    );
  };
};

export default Vets;
