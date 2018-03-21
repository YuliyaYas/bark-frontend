import React, {Component} from 'react';
import Header from './../Header';
import TestimonialCard from './TestimonialCard';

class Vets extends Component {
  constructor(props){
    super(props);
  };

  render(){
    // console.log("test", this.props.testimonials)
    const testimonials = this.props.testimonials.map((testimonial,i)=>{
       return <TestimonialCard key={i} testimonial = {testimonial} />
    })


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
            <div className="in-line"><h3 className=" grey-font">My Pet Needs:</h3>
            <select className="styled-select grey-font bold">
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
              <option value="check-up">Check-up</option>
            </select>
            <h3 className=" grey-font">My Pets Location:</h3>
            <select className="styled-select grey-font bold">
              <option value="check-up">location 1</option>
              <option value="check-up">location 2</option>
              <option value="check-up">location 3</option>
              <option value="check-up">location 4</option>
              <option value="check-up">location 5</option>
            </select>
            </div>
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
      </div>
    );
  };
};

export default Vets;
