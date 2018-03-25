import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/yuliya/bark-frontend/barkdoc-fronend/src/stylesheet/App.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
