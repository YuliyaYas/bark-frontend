import React from 'react';
import Header from './../Header.js';
import INeedAptmnt from './INeedAptmnt.js'
import WhyBarkDoc from './WhyBarkDoc.js'
import OurServices from './OurServices.js'

const HomePage = () => {
  return(
    <div>
    <div className="container-zig-zag">
      <div className="pug-background">
        <Header />
        <INeedAptmnt />
      </div>
      </div>
      <div className="container-brown-zig-zag">
      <WhyBarkDoc />
      </div>
      <div className="container-zig-zag">
      <OurServices />
      </div>
    </div>
  )
}

export default HomePage;
