import React from 'react';
import Header from './../Header.js';
import OurServices from '../OurServices.js';
import HaveQuestionsForm from '../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';
import '/Users/yuliya/bark-frontend/barkdoc-fronend/src/stylesheet/About.css';

const About = () => {
  return(
    <div>
      <div className="background-pet-pattern container-pattern-zig-zag">
        <Header />
        <h1 className="white-font content bold padding-about">About Us</h1>
      </div>
      <div className="white">
      <div className="content white">
      <div className="center grey-font pt-26 bold">Founder Shana Urban</div>
      <hr className="grey-font length-25"/>
      <div className="row grey-font font-11pt">
        <div className="column-about padding-right-20">
          <p className="width-54">
          <img alt="" className="B-float" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/about/b.png")} />
              arkDoc founder Shana Urban was balancing a Fashion
              Buying career for 12 years with a busy schedule, her own
              rescue mutt Toodles, as well help fostering and getting
              over 20 dogs adopted for various rescue groups.
          </p>
          <p>
            She was always faced with the challenge of getting her dog
            and her fosters to their Veterinarian appointments.  All public
            transportation (including cabs) requires a pet to be in an enclosed carrier or face refusal or worse-big fines. Her dog would not go in
            a carrier without being traumatized and some of her other fosters couldn’t fit in one, nor could she physically carry some of the
            carriers with the dogs she could fit.  She found herself just
            leashing them up and begging cab drivers to take them or risking getting a ticket in the subway both ways.  Upon arrival at the
            Vet’s office, her dog and fosters alike would become terrified
            along with all the others animals in the cramped waiting areas.  Then within this tight space, the worry set in that her healthy
             pup or already weakened immune systemed foster pup would catch another dog’s illness while in the waiting area.
          </p>
          <p>
            She thought, there just has to be a better way, and the idea of BarkDoc was created.
          </p>
          <p>
            By partnering with Veterinarians, BarkDoc allows customers the convenience of booking an appointment online, staying right in your own home (or office even), and the Vet will come to you for what would be consistent with other Vet rates in your area.
          </p>
          <p>
            BarkDoc also offers lifetime discounts for all rescue group’s foster dogs, as well as all of our brave Veterans with service animals.
          </p>
        </div>
        <div className="column-shana-img">
          <img alt="" className="shana-img" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/about/shana_dog.png")} />
        </div>
      </div>
      </div>
      </div>
      <div className="container-brown-zig-zag"> </div>
      <OurServices />
      <div className="container-grey-zig-zag"> </div>
        <HaveQuestionsForm />
      <DogBottom />
    </div>

  );
};

export default About;
