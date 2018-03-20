import React from 'react';
import Header from './../Header.js';
import ReadyToApply from './ReadyToApply';

const Jobs = (props) => {

  return(
    <div className="white">
    <Header />
      {props.job_posts.length>0 ?
        <div className="content">
          <div className="margin-top-60px">
            <span className="grey-font bold  pt-20">{props.job_posts[0].title} </span>
            <span className="light-grey-font bold font-14 "> {props.job_posts[0].location}</span>
          </div>
          <h2 className="orange-font">About the Position</h2>
          <p>{props.job_posts[0].about}</p>
          <h2 className="orange-font">Whar Youll Do: </h2>
          <ul>{props.job_posts[0].responsibilities.split('•').map((st,i)=> {
          if (st){
            return <li key={i}>{st}</li>
            }
          }) }</ul>
          <h2 className="orange-font">Qualifications: </h2>

          <ul>{props.job_posts[0].qualifications.split('•').map((st,i)=> {
          if (st){
            return <li key={i}>{st}</li>
            }
          }) }
        </ul>
        </div>

         :
         ""}
         <ReadyToApply />
    </div>
  );
};

export default Jobs;
