import React from 'react';
import './../stylesheet/DogBottom.css';


const DogBottom = () => {
  return(
    <div className="dog-position-relative">
    <div><img className="dog-bottom-img" alt="" src={require("./../img/repeated/dog_bottom.png")} /></div>
      <div className="container-white-zig-zag"></div>
    </div>
  );
};

export default DogBottom;
