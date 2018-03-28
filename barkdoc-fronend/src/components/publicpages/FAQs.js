import React from 'react';
import Header from './../Header';


const FAQs = (props) => {
  console.log(props.faqs.length !== 0 ? props.faqs : 'no')
  return(
    <div>
      <Header />
        <div>
          {props.faqs.length !== 0
            ?
              props.faqs.map((faq, i) => {
                return (
                <div key={i}>
                <p>{faq.question}</p>
                <p>{faq.answer}</p>
                </div>
              )})
            :
              ''
          }
      </div>
    </div>
  );
};

export default FAQs;
