import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Generator from "./components/FieldGenerator/Generator";
import Wizards from "./components/FieldGenerator/Wizards";
import Calculators from "./components/FieldGenerator/Calculators";
import "tachyons";
import './App.css';

const initialState = {
  percentWizards: {
    total: [
    ],
  },
  dollarWizards: {
    total: [
    ]
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

// creating wizards (called in Generator.js)

  addPercentWiz = () => {
    let perWizLength = this.state.percentWizards.total.length;
    let newWizard = JSON.parse(`{ "name": "PercentWizard${perWizLength}", "prompt": "(Set this prompt in the wizard)", "rate": "" }`);
    this.setState({percentWizards: {total: [...this.state.percentWizards.total, newWizard]}})
    console.log(this.state.percentWizards)
  }

  addDollarWiz = () => {
    let perWizLength = this.state.dollarWizards.total.length;
    let newWizard = JSON.parse(`{ "name": "DollarWizard${perWizLength}", "prompt": "(Set this prompt in the wizard)", "dollar": "" }`);
    this.setState({dollarWizards: {total: [...this.state.dollarWizards.total, newWizard]}})
    console.log(this.state.dollarWizards)
  }

// updating wizard states (called in SomeWizard.js) - could eventually be refactored to be reused

  onPercentFormSubmit = (wizardId, promptState, rateState) => {
    let currentPercentWizards = this.state.percentWizards.total;
    let updatedWizard = currentPercentWizards[wizardId];
    updatedWizard.prompt = promptState;
    updatedWizard.rate = rateState;
    currentPercentWizards[wizardId] = updatedWizard;
    this.setState({percentWizards: {total: currentPercentWizards}});
    console.log("onFormSubmit " + JSON.stringify(this.state.percentWizards.total))
  }

  onDollarFormSubmit = (wizardId, promptState, dollarState) => {
    let currentDollarWizards = this.state.dollarWizards.total;
    let updatedWizard = currentDollarWizards[wizardId];
    updatedWizard.prompt = promptState;
    updatedWizard.dollar = dollarState;
    currentDollarWizards[wizardId] = updatedWizard;
    this.setState({dollarWizards: {total: currentDollarWizards}});
    console.log("onFormSubmit " + JSON.stringify(this.state.dollarWizards.total))
  }

  clearCalculators = () => {
    this.setState({percentWizards: {total: []}});
    this.setState({dollarWizards: {total: []}});
  }

  render() {

    return (
      <div>
        <Navigation />
        <Header />
        <div className="flex flex-wrap">
          <div className="w-auto w-third-l">
            <Generator
              setPercentWizCount={this.addPercentWiz}
              setDollarWizCount={this.addDollarWiz}
              clearAll={this.clearCalculators}
              />
          </div>
          <div className="w-auto w-third-l">
            <Wizards
              percentWizardCount={this.state.percentWizards.total}
              dollarWizardCount={this.state.dollarWizards.total}
              onPercentFormSubmit={this.onPercentFormSubmit}
              onDollarFormSubmit={this.onDollarFormSubmit}
            />
          </div>
          <div className="w-auto w-third-l">
            <Calculators
              percentCalculators={this.state.percentWizards.total}
              dollarCalculators={this.state.dollarWizards.total}
            />
          </div>
        </div>
      </div>
    )
  }  
}

export default App;
