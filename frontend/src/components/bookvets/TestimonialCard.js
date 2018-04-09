import React from 'react';

const TestimonialCard = (props) => {
  // console.log(props.testimonial);
  return(
    <div className="margin-top-60 testimonial-card">
    <div className="width-40 margin-left-30">
      <img src={props.testimonial.profile_image} alt=""/>
    </div>
    <div className="quote-row">
      <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
      <p className="center grey-font">{props.testimonial.review}</p>
    </div>

    <div className="center margin-5">
      <span className="grey-font bold">{props.testimonial.name} - </span>
      <span className="light-grey-font"> {props.testimonial.location}</span>
    </div>
    </div>
  );
};

export default TestimonialCard;
