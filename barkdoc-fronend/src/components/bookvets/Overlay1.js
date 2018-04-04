import React from 'react';
import './../../stylesheet/Overlay1.css';

const Overlay1 = (props) => {
  // console.log("in overay", props);
  return(
    <div className="base">
    <div className="shroud overlay-scroll">
    <div className="overlay-popup ">
      <img className="logo-white" src={require("./../../img/repeated/white-logo.png")} alt=""/>
    <div>
      <form className="location-form form-position" onSubmit={props.handleContinueLocation}>
      <div className="where-spacing white-font">
        <h1>Where Should We Swing By?</h1>
        <p> Let us know your pet's location to continue </p>
      </div>
      <p className="white-font">*My Pet's Location:</p>
      <select className="styled-select-location grey-font bold" onChange={props.handleSelectChange}>
        <option value="New York City" id="115306">New York City</option>
        <option value="Manhattan" id="115307">Manhattan</option>
        <option value="Brooklyn" id="115308">Brooklyn</option>
        <option value="Queens" id="115306">Queens</option>
      </select>
      <button type="submit" className="orange white-font display-block bold continue-button">CONTINUE</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Overlay1;
