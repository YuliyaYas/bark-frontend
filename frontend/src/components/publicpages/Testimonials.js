import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Header.js';
import OurServices from './../OurServices.js';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';
import './../../stylesheet/Testimonials.css';


const Testimonials = (props) => {
  // console.log(props.testimonials)
  return(
    <div>
      <div className="white">
      <div className="background-cat container-testimonials-zig-zag">
        <Header />
        <h1 className="white-font content bold padding-career">Testimonials</h1>
      </div>
      <div className="white testimonials-content">
        <div className="center grey-font pt-26 bold">BOW WOW! Read Our Reviews </div>
        <hr className="grey-font length-40"/>
      </div>
          {props.testimonials.length !== 0 ?
          <div>
            <div className="row font-11pt content grey-font">
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[0].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[0].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[0].name}</h3>
                  <h4>{props.testimonials[0].location}</h4>
                </div>
              </div>
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[1].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[1].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[1].name}</h3>
                  <p>{props.testimonials[1].location}</p>
                </div>
              </div>
            </div>
            <div className="row font-11pt content grey-font">
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[2].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[2].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[2].name}</h3>
                  <p>{props.testimonials[2].location}</p>
                </div>
              </div>
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[3].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[3].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[3].name}</h3>
                  <p>{props.testimonials[3].location}</p>
                </div>
              </div>
            </div>
            <div className="row font-11pt content grey-font">
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[4].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[4].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[4].name}</h3>
                  <p>{props.testimonials[4].location}</p>
                </div>
              </div>
              <div className="column-review">
                <div className="width-40 margin-left-30">
                  <img src={props.testimonials[5].profile_image} alt=""/>
                </div>
                <div className="quote-row">
                  <img className="quotes" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>{props.testimonials[5].review}</p>
                </div>
                <div className="name-row">
                  <h3>{props.testimonials[5].name}</h3>
                  <p>{props.testimonials[5].location}</p>
                </div>

              </div>
            </div>
          </div>

          :
          ""
        }
      <div className="center grey-font pt-30 bold width-40 margin-30 margin-top-80px">Ready to Raise the
      Woof With BarkDoc?</div>
      <Link to="/vets">
        <button className="orange white-font margin-39 width-22 display-block sign-in-button bold">SCHEDULE MY AT HOME APPOINTMENT</button>
      </Link>
    </div>
    <div className="container-brown-zig-zag" />
    <OurServices />
    <div className="container-grey-zig-zag" />
    <HaveQuestionsForm />
    <DogBottom />
    </div>

  );
};

export default Testimonials;
