import React from 'react';

const SuccessFormMessage = () => {
  return(
    <div>
      <h1 className="success-message" style={{color: 'orange', textAlign: 'center', marginTop: '50px'}}>Thank you!</h1>
      <h1 className="success-message" style={{color: 'orange', textAlign: 'center'}}>Form was submitted successfully.</h1>
    </div>
  );
};

export default SuccessFormMessage;
