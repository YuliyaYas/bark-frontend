import React from 'react';
import Header from './../Header';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';
import './../../stylesheet/VetProfile.css';

const VetProfile = () => {
  return(
    <div>
      <div className="background-vet-background container-pattern-zig-zag">
        <Header />
      </div>

      <div className="row white">
        <div className="content">
          <div className="column-70 grey-font">
            <div className="profile-info">
              <div className="profile-info-l">
                <img alt="" className="circle-img" src={require("../../img/vet_profile.png")}/>
              </div>
              <div className="profile-info-r">
                <h1 className="white-font bold content">Dr. Ryan U, VMD</h1>
                <h3 className="white-font content">Veterinariae Medicinae Doctor</h3>
                <h3 className="white-font content">***** Verified Patient Reviews(6)</h3>
              </div>
            </div>
            <div className="services">
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
              <div className="column-34">
                <p>Parasite testing</p>
                <p>Tick testing</p>
                <p>Urine Testing</p>
                <p>Ultrasounds</p>
                <p>Cold Laser Therapy</p>
              </div>
            </div>
              <hr />
              <h2 className="bold">Education and Service</h2>
              <p>
              Medical School - Cornell University, Veterinariae Medicinae Doctor
              </p>
              <p>
              Dr. Ryan loves to learn and grow as Veterinary Medicine evolves. Through the years he has taken extensive continuing education in Laser Surgery, Ultrasound,
              Echocardiograms, Endoscopy and Cold Laser Therapy.
              </p>
              <hr />
              <h2 className="bold">Verified Patient Reviews (6)</h2>
              <h4><img alt="" className="stars float-left" src={require("../../img/stars.png")}/> 4.5 </h4>
              <br/>
              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div >
                <div className="col-55">
                  <div><span className="grey-font pt-12">Trish R. </span><span className="light-grey-font font-9 "> - Soho</span></div>
                </div>
                <div className="col-45">
                  <img alt="" className="quotes quote-size" src={require("./../../img/repeated/quotations.png")} alt="" />
                  <p>Dr. Ryan had a very open schedule which worked perfect for my schedule. So easy of a process!</p>
                  <img alt="" className="stars float-left" src={require("../../img/stars.png")}/>
                  <br/>
                  <br/>
                </div>
              </div>
              <button className="orange white-font bold book-now-btn">BOOK NOW</button>
          </div>
        </div>

        <div className="column-30">
            <h1 className="orange-font">Want to book an appointment with Dr. Ryan?</h1>
            <h4>Click to see available times</h4>
            <button className="orange white-font bold book-now-btn-2">BOOK NOW</button>
        </div>
      </div>
      <div className="container-grey-zig-zag"></div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default VetProfile;
