import React from 'react';

const VetCard = () => {
  return(
    <div className="extralight-grey row margin-top-40">
      <div className="column-70 grey-font">
        <img className="float-left doc-img" alt="doc" src={require('./../../img/doctor-1.png')} />
        <h3>Dr. Matt E, VMD</h3>
        <p>Veterinariae Medicinae Doctor</p>
        <h4 className="orange-font">Verified Patient Reviews</h4>
        <p>"Dr. Matt knew exactly what was wrong with my cat immediately. I’m so happy he was able to swing by.”</p>
        <p>"Getting my dogs ears cleaned has never been easier.
        I booked a time and Dr. Matt showed up at my house!”</p>
        <p>"Dr. Matt always shows up with a treat. Now my dog doesn’t mind the vet at all!”</p>
      </div>
      <div className="column-20"></div>
        <button className="vet-card-btn grey grey-font bold">BOOK DR.MATT</button>
        <a href="/user/vets/vet"><button className="vet-card-btn white grey-font bold">VIEW FULL PROFILE</button></a>
    </div>
  );
};

export default VetCard;
