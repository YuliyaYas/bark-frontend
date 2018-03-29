import React from 'react';
import {Link} from 'react-router-dom';

const WhyBarkDoc = () => {
  return(
    <div className="white">
      <div className="content white">
        <div className="center grey-font pt-26 bold">Why BarkDoc?</div>
        <hr className="grey-font length-11"/>
      </div>
      <div className="content">
        <div className="row grey-font">
          <div className="column">
            <img className="icon-house" alt="" src={require("./../../img/homepage/house_icon.png")} />
            <h3>We Come to You!</h3>
            <p className="width-40 center margin-left-30">Easily book your appointment
            with our Trusted Vets and they will
            arrive at your doorstep.</p>
          </div>
          <div className="column">
            <img className="icon-dog-zzz" alt="" src={require("./../../img/homepage/dog_zzz_icon.png")} />
            <h3>More Time for You & Fido</h3>
            <p className="width-40 center margin-left-30">Your furry loved one(s) will thank you
            later for the extra nap time while waiting
            in comfort for the Doc to arrive.</p>
          </div>
          <div className="column">
            <img className="icon-jar" alt="" src={require("./../../img/homepage/jar_bone.png")} />
            <h3>More $ for Treats</h3>
            <p className="width-40 center margin-left-30">We’re committed to keeping home
            Veterinarian Care at affordable rates, plus all the convenience of your own home.</p>
          </div>
        </div>
        <Link to="/user/vets"> <button className="orange white-font schedule-appt bold margin-41">SCHEDULE AN APPOINTMENT</button></Link>
      </div>
    </div>
  );
};

export default WhyBarkDoc;
