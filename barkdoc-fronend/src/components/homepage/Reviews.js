import React from 'react';
import {Link} from 'react-router-dom';

const Reviews = (props) => {
  // console.log(props.homepage_reviews.length);
  return(
    <div className="white container-review-zig-zag">
      <div className="content white">
        <div className="center grey-font pt-26 bold">BOW WOW! Read Our Reviews </div>
        <hr className="grey-font length-40"/>
      </div>
      {props.homepage_reviews.length !== 0 ?
      <div>
        <div className="row font-11pt content grey-font">
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img className="profile-image" src={props.homepage_reviews[0].profile_image} alt=""/>
            </div>
            <div className="quote-row">
              <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
              <p>{props.homepage_reviews[0].review}</p>
            </div>
            <div className="review-name">
              <h3>{props.homepage_reviews[0].name}</h3>
              <h4>{props.homepage_reviews[0].location}</h4>
            </div>
          </div>
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img className="profile-image" src={props.homepage_reviews[1].profile_image} alt=""/>
            </div>
            <div className="quote-row">
              <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
              <p>{props.homepage_reviews[1].review}</p>
            </div>
            <div className="review-name">
              <h3>{props.homepage_reviews[1].name}</h3>
              <h4>{props.homepage_reviews[1].location}</h4>
            </div>
          </div>
        </div>
        <div className="row font-11pt content grey-font">
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img className="profile-image" src={props.homepage_reviews[2].profile_image} alt=""/>
            </div>
            <div className="quote-row">
              <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
              <p>{props.homepage_reviews[2].review}</p>
            </div>
            <div className="review-name">
              <h3>{props.homepage_reviews[2].name}</h3>
              <h4>{props.homepage_reviews[2].location}</h4>
            </div>
          </div>
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img className="profile-image" src={props.homepage_reviews[3].profile_image} alt=""/>
            </div>
            <div className="quote-row">
              <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
              <p>{props.homepage_reviews[3].review}</p>
            </div>
            <div className="review-name">
              <h3>{props.homepage_reviews[3].name}</h3>
              <h4>{props.homepage_reviews[3].location}</h4>
            </div>
          </div>
        </div>
      </div>

      :
      ""
    }
    <div className="center grey-font midle-width pt-26 bold">
      Ready to Raise the
      Woof With BarkDoc?
    </div>
      <Link to="/user/vets"><button className="orange white-font button-make-at-home bold">MAKE MY AT HOME APPOINTMENT</button></Link>

    </div>
  );
};

export default Reviews;
