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
          <h1 className="white-font content bold padding-faq">FAQS</h1>
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
                  )})
                }

                </div>

                :
                faq.answer.split('--').map((answer,k) => {
                  return(
                    <p key={k}>{answer}</p>
                  )
                })}
                <h1>{faq.button === true ? <button className="orange white-font find-more-btn">FIND OUT MORE</button> : ""}</h1>
                </div>
              )})
            :
              ''
          }
          <h3>Have a question that isn’t on here?</h3>
          <p>Click the Contact Us button below with your inquiry and someone will get back to you shortly.</p>
          <button className="orange white-font contact-btn">CONTACT US</button>
      </div>
      <div className="container-grey-zig-zag"></div>
      </div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default FAQs;
