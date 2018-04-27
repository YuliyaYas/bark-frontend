import React from 'react';
import Header from './../Header.js';
import ReadyToApply from './ReadyToApply';
import './../../stylesheet/Job.css';

const Jobs = (props) => {

  return(
    <div className="white">
    <Header />
      {props.job_posts.length>0 ?
        <div className="content-job">
          <div className="margin-top-80px">
            <span className="grey-font bold pt-20 title">{props.job_posts[0].title} </span>
            <br className="mobile"></br>
            <span className="light-grey-font bold font-14 "> {props.job_posts[0].location}</span>
          </div>
          <h2 className="orange-font">About the Position</h2>
          <p>{props.job_posts[0].about}</p>
          <h2 className="orange-font">What You'll Do: </h2>
          <ul className="job-description">{props.job_posts[0].responsibilities.split('•').map((st,i)=>{
          if (st){
            return <li key={i}>{st}</li>
            }
          }) }</ul>
          <h2 className="orange-font">Qualifications: </h2>

          <ul className="job-description">{props.job_posts[0].qualifications.split('•').map((st,i)=> {
          if (st){
            return <li key={i}>{st}</li>
            }
          }) }
        </ul>
        </div>

         :
         ""}
         <ReadyToApply />
         <br/>
         <br/>
    </div>
  );
};

export default Jobs;
