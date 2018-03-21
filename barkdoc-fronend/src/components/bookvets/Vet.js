import React, {Component} from 'react';
import Header from './../Header';

class Vets extends Component {
  constructor(props){
    super(props);
  };

  render(){
    console.log("test", this.props.testimonials)
    return(
      <div>
        <div className="background-bookings container-pattern-zig-zag">
          <Header />
          <h1 className="white-font bold content padding-career">Book an Appointment</h1>
        </div>
        <div className="white">
        <div className="content">
        <div className="row">
          <div className="column-80">
            <h3 className="display-block grey-font">My Pet Needs:</h3>
            <select className="styled-select grey-font bold">
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
            </select>
            <h3 className="display-block grey-font">My Pets Location:</h3>
            <select className="styled-select grey-font bold">
              <option value="check-up">location</option>
              <option value="check-up">location</option>
              <option value="check-up">location</option>
              <option value="check-up">location</option>
              <option value="check-up">location</option>
            </select>
          </div>
          <div className="column-20">
            hi
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  };
};

export default Vets;
