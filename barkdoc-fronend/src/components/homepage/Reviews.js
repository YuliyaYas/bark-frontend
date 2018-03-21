import React from 'react';

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
              <img src={props.homepage_reviews[0].profile_image} alt=""/>
            </div>
            <img className="quotes" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/quotations.png")} alt="" />
            <p>{props.homepage_reviews[0].review}</p>
            <h3>{props.homepage_reviews[0].name}</h3>
            <h4>{props.homepage_reviews[0].location}</h4>
          </div>
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img src={props.homepage_reviews[1].profile_image} alt=""/>
            </div>
            <img className="quotes" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/quotations.png")} alt="" />
            <p>{props.homepage_reviews[1].review}</p>
            <h3>{props.homepage_reviews[1].name}</h3>
            <p>{props.homepage_reviews[1].location}</p>
          </div>
        </div>
        <div className="row font-11pt content grey-font">
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img src={props.homepage_reviews[2].profile_image} alt=""/>
            </div>
            <img className="quotes" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/quotations.png")} alt="" />
            <p>{props.homepage_reviews[2].review}</p>
            <h3>{props.homepage_reviews[2].name}</h3>
            <p>{props.homepage_reviews[2].location}</p>
          </div>
          <div className="column-review">
            <div className="width-40 margin-left-30">
              <img src={props.homepage_reviews[3].profile_image} alt=""/>
            </div>
            <img className="quotes" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/quotations.png")} alt="" />
            <p>{props.homepage_reviews[3].review}</p>
            <h3>{props.homepage_reviews[3].name}</h3>
            <p>{props.homepage_reviews[3].location}</p>

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
    <button className="orange white-font button-make-at-home bold">MAKE MY AT HOME APPOINTMENT</button>

    </div>
  );
};

export default Reviews;
