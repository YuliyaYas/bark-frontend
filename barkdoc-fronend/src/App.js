import './index.css';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../src/components/signin/Signin.js';
import Footer from '../src/components/Footer.js';
import HomePage from '../src/components/homepage/HomePage.js';
import About from '/Users/yuliya/bark-frontend/barkdoc-fronend/src/components/publicpages/About.js';
import Butter from 'buttercms';


const butter = Butter('3881af973b6179f6adef4f7b2cd0a6a3b0d3c1e8');


class App extends Component {
  constructor(){
    super()
    this.state = {
      homepage_reviews: []
    }
  }
  componentDidMount(){

    butter.content.retrieve(["homepage_reviews", "review_items"])
    .then((resp) => {
      this.setState({homepage_reviews: resp.data.data.review_items})
    });
    }

  render() {
    return (
      <div>
      <Switch>
      <Route path={`/about`} component={ () => <About />} />
      <Route path={`/user`} component={ () => <HomePage homepage_reviews={this.state.homepage_reviews}/>} />
      <Route path={`/`} component={ () => <SignIn/>} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
