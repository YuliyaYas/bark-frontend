import React from 'react';

const TestimonialCard = (props) => {
  console.log(props.testimonial);
  return(
    <div>
    <div className="width-40 margin-left-30">
      <img src={props.testimonial.profile_image} alt=""/>
    </div>
    <img className="quotes" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/quotations.png")} alt="" />
    <p>{props.testimonial.review}</p>
    <h3>{props.testimonial.name}</h3>
    <h4>{props.testimonial.location}</h4>
    </div>
  );
};

export default TestimonialCard;
