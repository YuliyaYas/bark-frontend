import React from 'react';

const Review = (props) => {
  console.log(props.review);
  return(
    <div>
      <div className="review">
        <div className="col-55">
          <div><span className="grey-font pt-12">{props.review.customer_name}</span><span className="light-grey-font font-9 "> - {props.review.customer_location}</span></div>
        </div>
        <div className="col-45">
          <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
          <div className="review-text">
            <p>{props.review.review}</p>
            <img alt="" className="stars float-left" src={require(`../../img/${props.review.rating}_stars.png`)}/>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Review;
