import React from 'react';
import './../../stylesheet/Overlay1.css';

const Overlay1 = () => {
  return(
    <div className="overlay-popup">
      <img className="logo-white" src={require("./../../img/repeated/white-logo.png")} alt=""/>
    <div>
      <form>
      <h1>Where Should We Swing By?</h1>
      <p> Let us know your pet's location to continue </p>
      <p>*My Pet's Location:</p>
      <select className="styled-select grey-font bold">
        <option value="location">Manhattan</option>
        <option value="location">Bronx</option>
        <option value="location">Queens</option>
        <option value="location">Staten Island</option>
      </select>
      <button type="submit" className="orange white-font display-block bold continue-button">CONTINUE</button>
      </form>
    </div>
    </div>
  );
};

export default Overlay1;
