import React from 'react';
import Header from './../Header.js';
import INeedAptmnt from './INeedAptmnt.js'
import WhyBarkDoc from './WhyBarkDoc.js'

const HomePage = () => {
  return(
    <div>
    <div className="container-zig-zag">
      <div className="pug-background">
        <Header />
        <INeedAptmnt />
      </div>
      </div>
      <WhyBarkDoc />
    </div>
  )
}

export default HomePage;
