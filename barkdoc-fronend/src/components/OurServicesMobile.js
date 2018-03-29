import React from 'react';
import {Link} from 'react-router-dom';

const OurServicesMobile = () => {
  return(
      <div className="brown services-mobile">
        <div className="content">
        <div className="center white-font pt-26 bold">Our Services</div>
        <hr className="white-font length-11"/>
        </div>
        <div className="row light-pink-font font-11pt columns">
          <div className="column col-left">
            <div className="center">
              <p>Routine exams</p>
              <p>Check-ups</p>
              <p>Vaccinations</p>
              <p>Labwork</p>
              <p>Ear cleaning</p>
              <p>Nail clipping</p>
              <p>Upset tummy</p>
              <p>Cough</p>
              <p>Minor injuries</p>
            </div>
          </div>
          <div className="column col-right">
            <div className="center">
              <p>Allergy testing</p>
              <p>Echo-cardiograms</p>
              <p>Ultrasounds</p>
              <p>Heartworm testing</p>
              <p>Tick testing</p>
              <p>Parasite testing</p>
              <p>Urine testing</p>
              <p>Peaceful goodbyes</p>
              <p>+ more</p>
            </div>
          </div>
        </div>
        <button className="orange white-font button-meet-our-vets bold margin-left-44">MEET OUR VETS</button>
      </div>
  );
};

export default OurServicesMobile;
