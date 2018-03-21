import React, {Component} from 'react';
import Header from './../Header';

class Vets extends Component {
  constructor(){
    super();
  };

  render(){
    return(
      <div>
        <div className="background-bookings container-pattern-zig-zag">
          <Header />
          <h1 className="white-font content bold padding-career">Book an Appointment</h1>
        </div>
        vets
      </div>
    );
  };
};

export default Vets;
