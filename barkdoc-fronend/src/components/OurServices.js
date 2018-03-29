import React from 'react';
import {Link} from 'react-router-dom';

const OurServices = () => {
  return(
      <div className="brown services-desktop">
        <div className="content">
        <div className="center white-font pt-26 bold">Our Services</div>
        <hr className="white-font length-11"/>
        </div>
        <div className="row light-pink-font font-11pt">
          <div className="column">
            <div className="width-40 center margin-left-30">Routine exams
              <p>Check-ups</p>
              <p>Vaccinations</p>
              <p>Labwork</p>
              <p>Ear cleaning</p>
              <p>Nail clipping</p>
            </div>
          </div>
          <div className="column">
            <div className="width-40 center margin-left-30">
              <p>Upset tummy</p>
              <p>Cough</p>
              <p>Minor injuries</p>
              <p>Allergy testing</p>
              <p>Echo-cardiograms</p>
              <p>Ultrasounds</p>
            </div>
          </div>
          <div className="column">

            <div className="width-40 center margin-left-30">
              <p>Heartworm testing</p>
              <p>Tick testing</p>
              <p>Parasite testing</p>
              <p>Urine testing</p>
              <p>Peaceful goodbyes</p>
              <p>+ more</p>
            </div>
          </div>
        </div>
          <Link to="/user/vets"><button className="orange white-font button-meet-our-vets bold margin-left-44">MEET OUR VETS</button></Link>
      </div>
  );
};

export default OurServices;
