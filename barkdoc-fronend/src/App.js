import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './index.css';
import SignIn from '../src/components/signin/Signin.js'
import Header from '/Users/yuliya/bark-frontend/barkdoc-fronend/src/components/Header.js'
import Footer from '/Users/yuliya/bark-frontend/barkdoc-fronend/src/components/Footer.js'



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route path={`/`} component={ () => <SignIn/>} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
