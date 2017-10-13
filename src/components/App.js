import React, { Component } from 'react';
import './App.css';
import Single from './Single.js';
import Error from './Error.js';
import PhotoGrid from './PhotoGrid';
import Heading from './Heading';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Switch>
          <Route exact path='/' component={PhotoGrid}/>
          <Route exact path='/pic/:id' component={Single}/>
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
