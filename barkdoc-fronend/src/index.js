import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
