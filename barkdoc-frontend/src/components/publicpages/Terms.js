import React from 'react';
import Header from './../Header.js';
import DogBottom from './../DogBottom.js';


const Terms = (props) => {
  console.log(props);
  return(
    <div>
    <Header />
      <br />
      <br />
      <br />
      <div className="center grey-font pt-26 bold padding-top-60">Terms Of Use</div>
      <hr className="grey-font length-11"/>
      <br />
      <div className="content">
        {props.termsOfUse.length > 0 ? props.termsOfUse : ""}
      </div>
    <DogBottom />
    </div>
  );
};

export default Terms;
