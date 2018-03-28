import React from 'react';
import Header from './../Header';
import './../../stylesheet/FAQs.css';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';



const FAQs = (props) => {
  console.log(props.faqs.length !== 0 ? props.faqs : 'no')
  return(
    <div>
      <div className="white">
        <div className="background-white-dog container-pattern-zig-zag">
          <Header />
          <h1 className="white-font content bold padding-faq">FAQ'S</h1>
        </div>
        <div className="content">
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
      <div className="container-grey-zig-zag"></div>
      </div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default FAQs;
