import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class INeedAptmnt extends Component{
  render(){
    return(
      <div className="content">
      <div className="font-40pt width-50 top-100 white-font bold">
        <div>Vet Appointments.</div>
        <div>At Your Home.</div>
        <div>Furrr Real.</div>
      </div>
      <div className="width-45">
      <div className="white-font font-16 float-left-desktop margin-top-20">I need an appointment for my</div>
      <form>
      <div className="float-right">
      <select className="styled grey-font margin-top-16 bold">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      </div>
      <Link to="/user/vets"><button type="submit" className="orange no-border white-font continue-button">CONTINUE</button></Link>
      </form>
      </div>
      </div>
    )
  }
}

export default INeedAptmnt;
