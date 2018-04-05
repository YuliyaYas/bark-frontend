import React from 'react';
import Header from './../Header.js';
import INeedAptmnt from './INeedAptmnt.js'
import WhyBarkDoc from './WhyBarkDoc.js';
import OurServices from '../OurServices.js';
import OurServicesMobile from '../OurServicesMobile.js';
import Reviews from './Reviews.js';
import DogBottom from './../DogBottom.js';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import './../../stylesheet/HomePage.css';

const HomePage = (props) => {
  return(
    <div className="secondary">
      <div className="container-zig-zag">
        <div className="pug-background">
          <Header />

          <INeedAptmnt />
        </div>
      </div>
      <div className="container-brown-zig-zag">
        <WhyBarkDoc />
      </div>
      <div>
        <OurServices />
        <OurServicesMobile />
      </div>
      <Reviews homepage_reviews={props.homepage_reviews}/>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default HomePage;
