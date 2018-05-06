import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from '../src/components/Footer.js';
import HomePage from '../src/components/homepage/HomePage.js';
import About from '../src/components/publicpages/About.js';
import FAQs from '../src/components/publicpages/FAQs.js';
import ContactUs from '../src/components/publicpages/ContactUs.js';
import Privacy from '../src/components/publicpages/Privacy.js';
import Terms from '../src/components/publicpages/Terms.js';
import Careers from '../src/components/publicpages/Careers.js';
import Jobs from '../src/components/publicpages/Jobs.js';
import Testimonials from '../src/components/publicpages/Testimonials.js';
import Vets from '../src/components/bookvets/Vets.js'
import VetProfile from '../src/components/vetprofile/VetProfile.js'
import Butter from 'buttercms';
var slugify = require('slugify')



const butter = Butter('3881af973b6179f6adef4f7b2cd0a6a3b0d3c1e8');


class App extends Component {
  constructor(){
    super()
    this.state = {
      homepage_reviews: [],
      job_posts: [],
      faqs: [],
      selectedLocationId: 'no-location',
      allLocations: [],
      selectedLocationName: '',
      selectLocationClick: false,
      vets_reviews: [],
      vets: [],
      selectedVet: [],
      privacy: "",
      termsOfUse: ""
    }
  }

  componentDidMount(){

    butter.content.retrieve(["homepage_reviews", "review_items"])
    .then((resp) => {
      this.setState({homepage_reviews: resp.data.data.review_items})
    });

    butter.content.retrieve(["jobs", "job_posts"])
    .then((resp) => {
      this.setState({job_posts: resp.data.data.job_posts})
    });

    butter.content.retrieve(["faqs_headline", "faq_headlines"])
    .then((resp) => { this.setState({faqs: resp.data.data.faq_headlines})});

    butter.content.retrieve(["privacy_headline", "privacy"])
    .then((resp) => this.setState({privacy: resp.data.data.privacy[0].rules}));

    butter.content.retrieve(["terms_headline", "terms"])
    .then((resp) => this.setState({termsOfUse: resp.data.data.terms[0].term}));

    butter.content.retrieve(["reviews", "vets_reviews"])
    .then((resp) => this.setState({vets_reviews: resp.data.data.vets_reviews}));

    fetch(`https://www.mytime.com/api/mkp/v1/companies/112627/locations`)
    .then(resp=>resp.json())
    .then(myJson => this.setState({allLocations: myJson.locations}))

  };


    handleSelectChange = (e) => {
      e.preventDefault();
      this.setState({selectedLocationId: e.target.value});
    };


    handleLocationButton = () => {
      this.state.selectLocationClick = false
      this.setState({selectLocationClick: true})

        let location = this.state.allLocations.filter(loc => loc.id == this.state.selectedLocationId)
        this.setState({selectedLocationName: location[0].nickname})


      fetch(`https://www.mytime.com/api/mkp/v1/companies/112627/employees?location_ids=${this.state.selectedLocationId}`)
      .then(resp=>resp.json())
      .then(myJson => this.setState({vets: myJson.employees}))
    };

    handleLocationChange = (e) => {
      this.setState({selectedLocationId: e.target.value}, () => {
        let location = this.state.allLocations.filter(loc => loc.id == this.state.selectedLocationId)
        this.setState({selectedLocationName: location[0].nickname})
        fetch(`https://www.mytime.com/api/mkp/v1/companies/112627/employees?location_ids=${this.state.selectedLocationId}`)
        .then(resp=>resp.json())
        .then(myJson => this.setState({vets: myJson.employees}))
      })
    }

    handleVetClick = (e) => {
      let vetId = e.target.id;
      let vet = this.state.vets.filter(vet => vet.id == vetId);
      this.setState({selectedVet: vet}, () => this.props.history.push(`/vets/${slugify(this.state.selectedVet[0].name)}`))
    }

  render() {
    // console.log("in app", this.state);
    return (
      <div className="primary">
      <Switch>
      <Route path={`/vets/:name`} component={ () => <VetProfile vet={this.state.selectedVet} vets_reviews={this.state.vets_reviews}/>} />
      <Route path={`/vets`} component={ () => <Vets handleVetClick={this.handleVetClick} vets={this.state.vets} allLocations={this.state.allLocations} selectedLocationId={this.state.selectedLocationId} handleContinueLocation={this.handleContinueLocation} handleSelectChange={this.handleSelectChange} handleLocationButton={this.handleLocationButton} handleLocationChange={this.handleLocationChange} selectLocationClick={this.state.selectLocationClick} testimonials={this.state.homepage_reviews} location={this.state.selectedLocationId} selectedLocationName={this.state.selectedLocationName}/>} />
      <Route path={`/testimonials`} component={ () => <Testimonials testimonials={this.state.homepage_reviews}/>} />
      <Route path={`/careers/:name`} component={ () => <Jobs job_posts={this.state.job_posts}/>} />
      <Route path={`/careers`} component={ () => <Careers />} />
      <Route path={`/about`} component={ () => <About />} />
      <Route path={`/faqs`} component={ () => <FAQs faqs={this.state.faqs}/>} />
      <Route path={`/contact`} component={ () => <ContactUs />} />
      <Route path={`/privacy`} component={ () => <Privacy privacy={this.state.privacy}/>} />
      <Route path={`/terms-of-use`} component={ () => <Terms termsOfUse={this.state.termsOfUse}/>} />
      <Route path={`/`} component={ () => <HomePage homepage_reviews={this.state.homepage_reviews}/>} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
