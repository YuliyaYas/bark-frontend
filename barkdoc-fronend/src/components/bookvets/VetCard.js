import React from 'react';

const VetCard = () => {
  return(
    <div className="extralight-grey row margin-top-40">
      <div className="column-70 grey-font">
        <img className="float-left doc-img" alt="doc" src={require('/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/doctor-1.png')} />
        <p>Dr. Matt E, VMD</p>
        <p>Veterinariae Medicinae Doctor</p>
        <p>Verified Patient Reviews</p>
        <p>"Dr. Matt knew exactly what was wrong with my cat immediately. I’m so happy he was able to swing by.”</p>
        <p>"Getting my dogs ears cleaned has never been easier.
        I booked a time and Dr. Matt showed up at my house!”</p>
        <p>"Dr. Matt always shows up with a treat. Now my dog doesn’t mind the vet at all!”</p>
      </div>
      <div className="column-20">VET</div>
        <button className="vet-card-btn grey grey-font bold">BOOK DR.MATT</button>
        <button className="vet-card-btn white grey-font bold">VIEW FULL PROFILE</button>
    </div>
  );
};

export default VetCard;
