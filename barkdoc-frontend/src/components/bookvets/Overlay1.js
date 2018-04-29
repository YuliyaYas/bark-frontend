import React from 'react';
import './../../stylesheet/Overlay1.css';

const Overlay1 = (props) => {
  console.log("in overay", props.location);
  return(
    <div className="base" >
    <div className="shroud overlay-scroll">
    <div className="overlay-popup" style={{"minHeight": (window.screen.height-20)+"px"}}>
      <img className="logo-white" src={require("./../../img/repeated/white-logo.png")} alt=""/>
    <div>
      <form className="location-form form-position" onSubmit={props.handleContinueLocation}>
        <div className="where-spacing white-font">
          <h1>Where Should We Swing By?</h1>
          <p> Let us know your pet's location to continue </p>
        </div>
        <p className="white-font left font-12"><span className="orange-font">* </span>My Pet's Location:</p>
        <div className="styled-select-location">
        <select className="styled-select grey-font bold" onChange={props.handleSelectChange} value={props.location}>
          <option value="no-location">Select a location</option>
          <option value="115307">Lower Manhattan</option>
          <option value="115306">Midtown Manhattan</option>
          <option value="113660">Upper Manhattan</option>
          <option value="115308">Brooklyn</option>
          <option value="115309">Queens</option>
        </select>
        <div className="styled-arrow-overlay"></div>
        </div>
        {props.location === "no-location" ? "" : <button type="submit" className="orange white-font display-block bold continue-button-overlay" onClick={props.handleLocationButton}>CONTINUE</button>}

      </form>
    </div>
    </div>
    </div>
    </div>
  );
};


export default Overlay1;
