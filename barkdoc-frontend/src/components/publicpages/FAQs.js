import React from 'react';
import Header from './../Header';
import './../../stylesheet/FAQs.css';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';



const FAQs = (props) => {
  console.log("faq", props.faqs.length !== 0 ? props.faqs : 'no')
  return(
    <div>
      <div className="white">
        <div className="background-white-dog container-pattern-zig-zag">
          <Header />
          <h1 className="white-font faq bold padding-faq">FAQS</h1>
        </div>
        <div className="content main-content grey-font emerg-list">
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
                <ul>{faq.answer.split('<li>').splice(1).map((answer,k) => {
                  return(
                    <li key={k}>{answer.split(/[0-9]+/).splice(0,1)}
                    <p>{answer.replace(answer.split(/[0-9]+/)[0] , '')}</p>
                    </li>
                  )})
                }</ul>

                </div>

                :
                faq.answer.split('--').map((answer,k) => {
                  return(
                    <p key={k}>{answer}</p>
                  )
                })}
                <h1>{faq.button === true ? <a href={faq.link}><button className="orange white-font find-more-btn">FIND OUT MORE</button></a> : ""}</h1>
                </div>
              )})
            :
              ''
          }
          <h3>Have a question that isn’t on here?</h3>
          <p>Click the Contact Us button below with your inquiry and someone will get back to you shortly.</p>
          <a href="mailto:someone@example.com?Subject=BarkDoc%20Contact%20" target="_top"><button className="orange white-font contact-btn">CONTACT US</button></a>
      </div>
      </div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};

export default FAQs;
