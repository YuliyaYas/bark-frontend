import React, {Component} from 'react';
import Header from './../Header';
import HaveQuestionsForm from './../HaveQuestionsForm.js';
import DogBottom from './../DogBottom.js';
import './../../stylesheet/VetProfile.css';
import Review from './Review.js'

class VetProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      vet:[]
    }
  }

componentDidMount(){
  let vetName = document.location.pathname.split("vets/")[1].split("-").join(" ")
  fetch('https://www.mytime.com/api/mkp/v1/companies/112627/employees')
  .then(resp => resp.json()).then(json => {
    this.setState({ vet: json.employees.filter( e => e.name === vetName)})})
}

  render(){

    const currentVetReviews = (this.props.vets_reviews.length > 0 && this.state.vet.length > 0) ? this.props.vets_reviews.filter(v=> v.vet_name === this.state.vet[0].name) : '';
    let rating = 0
    currentVetReviews.length > 0 ? currentVetReviews.forEach( v => rating += v.rating) : ''

    const vetReviews = currentVetReviews.length > 0 ? currentVetReviews.map((review,i)=> <Review review={review} key={i}/>) : ''

  return(
    <div>
      <div className="background-vet-background container-pattern-zig-zag">
        <Header />
      </div>

      <div className="row white">
        <div className="content">
          <div className="column-70 grey-font">
            <div className="profile-info">
              <div className="profile-info-l">
                {this.state.vet.length > 0 ? <img alt="" className="circle-img" src={this.state.vet[0].avatar}/> : "" }
              </div>
              <div className="profile-info-r">
                {this.state.vet.length > 0 ? <h1 className="white-font-profile bold content">{this.state.vet[0].name}</h1> : ""}
                {currentVetReviews.length > 0 ?
                <div>
                  <h3 className="white-font-profile content">Veterinarian</h3>
                  <h3 className="white-font-profile content"><img alt="" className="stars float-left" src={rating ? require(`../../img/${rating/currentVetReviews.length}_stars.png`) : ''}/> Verified Patient Reviews({currentVetReviews.length})</h3>
                </div>
                :
                ""
              }
              </div>
            </div>
            <div className="services">
              {this.state.vet.length > 0 ? <h2 className="bold">Services {this.state.vet[0].name} Offers:</h2> : ""}
              <div className="services-container">
                <div className="column-33">
                  <p>Routine exams</p>
                  <p>Check-ups</p>
                  <p>Vaccinations</p>
                  <p>Ear cleaning</p>
                  <p>Nail clipping</p>
                </div>
                <div className="column-33">
                  <p>Upset tummy</p>
                  <p>Cough</p>
                  <p>Minor injuries</p>
                  <p>Allergy testing</p>
                  <p>Heartworm testing</p>
                </div>
                <div className="column-34">
                  <p>Parasite testing</p>
                  <p>Tick testing</p>
                  <p>Urine Testing</p>
                  <p>Ultrasounds</p>
                  <p>Cold Laser Therapy</p>
                </div>
              </div>
            </div>
              <hr className="vet-line"/>
              <div className="education">
                <h2 className="bold">Education and Service</h2>
                <p>
                  {this.state.vet.length > 0 ? this.state.vet[0].training_question : "" }
                </p>
                <p>
                  {this.state.vet.length > 0 ? this.state.vet[0].difference_question : "" }
                </p>
              </div>

              <hr />
              <h2 className="bold">Verified Patient Reviews ({currentVetReviews.length})</h2>
              {currentVetReviews.length> 0 ?
              <h4><img alt="" className="stars float-left" src={rating ? require(`../../img/${rating/currentVetReviews.length}_stars.png`) : ''}/> {rating/currentVetReviews.length} </h4>
              :
              ""
              }
              <br/>
              <div className="reviews">
                {vetReviews}
              </div>

              <button className="orange white-font bold book-now-btn">BOOK NOW</button>
          </div>
        </div>

        <div className="book-now">
            {this.state.vet.length > 0 ? <h1 className="orange-font">Want to book an appointment with {this.state.vet[0].name}?</h1> : "" }
            <h4>Click to see available times</h4>
            <button className="orange white-font bold book-now-btn-2">BOOK NOW</button>
        </div>
      </div>
      <HaveQuestionsForm />
      <DogBottom />
    </div>
  );
};
};

export default VetProfile;
