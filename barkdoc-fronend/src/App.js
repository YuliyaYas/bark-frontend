import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from '../src/components/Footer.js';
import HomePage from '../src/components/homepage/HomePage.js';
import About from '../src/components/publicpages/About.js';
import FAQs from '../src/components/publicpages/FAQs.js';
import ContactUs from '../src/components/publicpages/ContactUs.js';
import Careers from '../src/components/publicpages/Careers.js';
import Jobs from '../src/components/publicpages/Jobs.js';
import Testimonials from '../src/components/publicpages/Testimonials.js';
import Vets from '../src/components/bookvets/Vets.js'
import VetProfile from '../src/components/vetprofile/VetProfile.js'
import Butter from 'buttercms';


const butter = Butter('3881af973b6179f6adef4f7b2cd0a6a3b0d3c1e8');


class App extends Component {
  constructor(){
    super()
    this.state = {
      homepage_reviews: [],
      job_posts: [],
      faqs: [],
      selectedLocationId: '',
      selectedLocationName: '',
      selectLocationClick: false
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
    .then((resp) => {
      this.setState({faqs: resp.data.data.faq_headlines})
    });

  };


    handleSelectChange = (e) => {
      e.preventDefault();
      this.setState({selectedLocationId: e.target.value});
    };

    handleContinueLocation = (e) => {
      e.preventDefault();
      fetch(`https://www.mytime.com/api/v2/companies/112627/locations/${this.state.selectedLocationId}.json`)
      .then(resp=>resp.json())
      .then(myJson => this.setState({selectedLocationName: myJson.street_address}));
    };

    handleLocationButton = () => {
      this.state.selectLocationClick = false
      console.log(this.state.selectLocationClick);
      this.setState({selectLocationClick: true}, () => console.log(this.state.selectLocationClick))
    }


  render() {
    // console.log(this.state.faqs)
    return (
      <div className="primary">
      <Switch>
      <Route path={`/vets/vet`} component={ () => <VetProfile/>} />
      <Route path={`/vets`} component={ () => <Vets handleContinueLocation={this.handleContinueLocation} handleSelectChange={this.handleSelectChange} handleLocationButton={this.handleLocationButton} selectLocationClick={this.state.selectLocationClick} testimonials={this.state.homepage_reviews} location={this.state.selectedLocationId} selectedLocationName={this.state.selectedLocationName}/>}/>
      <Route path={`/testimonials`} component={ () => <Testimonials testimonials={this.state.homepage_reviews}/>} />
      <Route path={`/careers/:slug`} component={ () => <Jobs job_posts={this.state.job_posts}/>} />
      <Route path={`/careers`} component={ () => <Careers />} />
      <Route path={`/about`} component={ () => <About />} />
      <Route path={`/faqs`} component={ () => <FAQs faqs={this.state.faqs}/>} />
      <Route path={`/contact`} component={ () => <ContactUs />} />
      <Route path={`/`} component={ () => <HomePage homepage_reviews={this.state.homepage_reviews}/>} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
