import React from 'react';
import Header from './../Header';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';
import '/Users/yuliya/bark-frontend/barkdoc-fronend/src/stylesheet/VetProfile.css';

const VetProfile = () => {
  return(
    <div>
      <div className="background-vet-background container-pattern-zig-zag">
        <Header />
        <h1 className="white-font bold content">Dr. Ryan U, VMD</h1>
        <h3 className="white-font content">Veterinariae Medicinae Doctor</h3>
        <h3 className="white-font content">***** Verified Patient Reviews</h3>
      </div>

      <div className="row white">
        <div className="content">
          <div className="column-70 grey-font">
            <h2 className="bold">Services Dr. Ryan Offers:</h2>
              <div className="column-33">
                <p>Routine exams</p>
                <p>Check-ups</p>
                <p>Vaccinations</p>
                <p>Ear cleaning</p>
                <p>Nail clipping</p>
              </div>
              <div className="column-33">
                <p>Upset tummy</p>
                <p>Cough</p>
                <p>Minor injuries</p>
                <p>Allergy testing</p>
                <p>Heqrtworm testing</p>
              </div>
              <div className="column-33">
                <p>Parasite testing</p>
                <p>Tick testing</p>
                <p>Urine Testing</p>
                <p>Ultrasounds</p>
                <p>Cold Laser Therapy</p>
              </div>
          </div>
        </div>
        <div className="column-30">
            BOOK NOW
        </div>
      </div>
      <div className="container-grey-zig-zag"></div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default VetProfile;
