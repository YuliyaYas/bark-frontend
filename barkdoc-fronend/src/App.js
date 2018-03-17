import './index.css';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../src/components/signin/Signin.js';
import Footer from '../src/components/Footer.js';
import HomePage from '../src/components/homepage/HomePage.js';
import Butter from 'buttercms';


const butter = Butter('3881af973b6179f6adef4f7b2cd0a6a3b0d3c1e8');


class App extends Component {

  componentDidMount(){

    butter.content.retrieve(["faq_headline", "faq_items"]).then((resp) => {
      console.log(resp.data.data.faq_items)
    });
    }

  render() {
    return (
      <div>
      <Switch>
      <Route path={`/user`} component={ () => <HomePage />} />
        <Route path={`/`} component={ () => <SignIn/>} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
