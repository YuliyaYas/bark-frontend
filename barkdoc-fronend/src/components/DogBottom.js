import React from 'react';
import '/Users/yuliya/bark-frontend/barkdoc-fronend/src/stylesheet/DogBottom.css';


const DogBottom = () => {
  return(
    <div className="dog-position-relative">
    <div><img className="dog-bottom-img" alt="" src={require("/Users/yuliya/bark-frontend/barkdoc-fronend/src/img/repeated/dog_bottom.png")} /></div>
      <div className="container-white-zig-zag"></div>
    </div>
  );
};

export default DogBottom;
