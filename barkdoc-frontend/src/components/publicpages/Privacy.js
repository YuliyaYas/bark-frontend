import React from 'react';
import Header from './../Header.js';
import DogBottom from './../DogBottom.js';


const Privacy = (props) => {
  console.log(props);
  return(
    <div>
    <Header />
      <br />
      <br />
      <br />
      <div className="center grey-font pt-26 bold padding-top-60">Privacy Policy</div>
      <hr className="grey-font length-11"/>
      <br />
      <div className="content">
        {props.privacy.length > 0 ? props.privacy : ""}
      </div>
    <DogBottom />
    </div>
  );
};

export default Privacy;
