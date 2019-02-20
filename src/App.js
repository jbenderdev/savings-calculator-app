import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import FieldGenerator from './components/FieldGenerator/FieldGenerator';
import PercentWizard from "./components/FieldGenerator/PercentWizard";
import DollarWizard from "./components/FieldGenerator/DollarWizard";
import "tachyons";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    input: '',
    addPercentField: "",
    addDollarField: "",
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
    }
  }

//this function is active within the component; your error is inside addPercentField

  addPercentField = () => {
      return(
        <div>
          <PercentWizard />
        </div>
      )
}

//this function is active within the component; your error is inside addDollarField

  addDollarField = () => {
    return(
      <div>
        <DollarWizard />
      </div>
    )
}

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <FieldGenerator addPercentField={this.addPercentField} addDollarField={this.addDollarField}/>
      </div>
    )
  }  
}


export default App;
