import React, { Component } from 'react';
import './App.css';
import Countries from './Components/countries'
import Navbar from './Components/nav.js';
import CountryCases from './Components/cntryCase';
import GlobalCases from './Components/globalCases';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
 
  render() { 
    return (
      <div>
        <Navbar />
        <Countries />
        <BrowserRouter>
          <Route path="/:CNTRYNAME" component={CountryCases} />
          <Route exact path="/" component={GlobalCases} />
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
