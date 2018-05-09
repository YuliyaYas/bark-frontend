import React from 'react';

const VetCard = (props) => {
  console.log("in real vet", props.vets_reviews);
  return(
    <div className="extralight-grey row margin-top-40">
      <div className="column-70 grey-font">
        <img className="float-left doc-img" alt="doc" src={props.vet.avatar} />
        <h3>{props.vet.name}</h3>
        <p>Veterenarian</p>
        <h4 className="orange-font">Verified Patient Reviews</h4>
        {props.vets_reviews.filter(r => r.vet_name===props.vet.name).length > 0
          ?
          <div>
            {props.vets_reviews
              .filter(r => r.vet_name===props.vet.name)
              .map(r => <p>{r.review}</p>)}
          </div>
          :
          <p>No Reviews yet! Be the first one.</p>
        }

      </div>
      <div className="column-20"></div>
        <button className="vet-card-btn grey grey-font bold">BOOK {props.vet.name.toUpperCase()}</button>
          <button className="vet-card-btn white grey-font bold" id={props.vet.id} onClick={props.handleVetClick}>VIEW FULL PROFILE</button>
    </div>
  );
};

export default VetCard;
