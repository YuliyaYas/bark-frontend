import React from 'react';

var slugify = require('slugify')


const VetCard = (props) => {
  console.log("in real vet", props);
  return(
    <div className="extralight-grey row margin-top-40">
      <div className="column-70 grey-font">
        <img className="float-left doc-img" alt="doc" src={props.vet.avatar} />
        <h3>{props.vet.name}</h3>
        <p>Veterenarian</p>
        <h4 className="orange-font">Verified Patient Reviews</h4>
        <p>"Reviews will go here"</p>
        <p>"More reviews"</p>

      </div>
      <div className="column-20"></div>
        <button className="vet-card-btn grey grey-font bold">BOOK {props.vet.name.toUpperCase()}</button>
        <a href={`/vets/${slugify(props.vet.name)}`}><button className="vet-card-btn white grey-font bold">VIEW FULL PROFILE</button></a>
    </div>
  );
};

export default VetCard;
