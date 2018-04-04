import React from 'react';
import './../../stylesheet/Overlay1.css';

const Overlay1 = () => {
  return(
    <div className="base">
    <div className="shroud overlay-scroll">
    <div className="overlay-popup ">
      <img className="logo-white" src={require("./../../img/repeated/white-logo.png")} alt=""/>
    <div>
      <form className="location-form form-position">
      <div className="where-spacing white-font">
        <h1>Where Should We Swing By?</h1>
        <p> Let us know your pet's location to continue </p>
      </div>
      <p className="white-font">*My Pet's Location:</p>
      <select className="styled-select-location grey-font bold">
        <option value="location">Lower Manhattan</option>
        <option value="location">Upper Manhattan</option>
        <option value="location">Midtown</option>
        <option value="location">Brooklyn</option>
        <option value="location">Queens</option>
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
