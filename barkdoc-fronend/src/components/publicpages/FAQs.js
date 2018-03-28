import React from 'react';
import Header from './../Header';
import './../../stylesheet/FAQs.css';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';



const FAQs = (props) => {
  console.log(props.faqs.length !== 0 ? props.faqs[4].answer.split('<li>') : 'no')
  return(
    <div>
      <div className="white">
        <div className="background-white-dog container-pattern-zig-zag">
          <Header />
          <h1 className="white-font content bold padding-faq">FAQ'S</h1>
        </div>
        <div className="content grey-font">
          {props.faqs.length !== 0
            ?
              props.faqs.map((faq, i) => {
                return (
                <div key={i}>
                <h3>{faq.question}</h3>
                {faq.answer.includes("<li>")
                ?
                <div>
                <p>{faq.answer.split('<li>')[0]}</p>
                {faq.answer.split('<li>').splice(1).map((answer,k) => {
                  return(
                    <p key={k}>-{answer}</p>
                  )})}
                </div>

                :
                faq.answer.split('--').map((answer,k) => {
                  return(
                    <p key={k}>{answer}</p>
                  )
                })}
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
