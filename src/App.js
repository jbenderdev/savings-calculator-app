import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Generators from "./components/FieldGenerator/Generator";
import Wizards from "./components/FieldGenerator/Wizards";
import Calculators from "./components/FieldGenerator/Calculators";
import "tachyons";
import './App.css';

const initialState = {
  percentWizards: {
    total: [], 
  },
  dollarWizards: {
    total: []
  },
//   },
//   percentCalculators: {
//     total: [],
//   },
//   dollarCalculators: {
//     total: [],
// },
  percentPrompts: [],
  dollarPrompts: [],
  rates: [],
  dollars: []
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    
  }

  addPercentWiz = () => {
    let perWizLength = this.state.percentWizards.total.length;
    this.setState({percentWizards: {total: [...this.state.percentWizards.total, `perWiz${perWizLength}`]}})
    console.log(this.state.percentWizards)
  }
  
  addDollarWiz = () => {
    let dolWizLength = this.state.dollarWizards.total.length;
    this.setState({dollarWizards: {total: [...this.state.dollarWizards.total, `dolWiz${dolWizLength}`]}})
    console.log(this.state.dollarWizards)
  }

//reinsert params newPrompt, newRate

  // addPercentCalc = () => {
  //   let perCalcLength = this.state.percentCalculators.total.length;
  //   this.setState({percentCalculators: 
  //     {total: [...this.state.percentCalculators.total, `perCalc${perCalcLength}`]
  //   }})
  //   // this.setState({percentCalculators: 
  //   //   {list: 
  //   //     {prompt: [...this.state.percentCalculators.list.prompt, newPrompt], rate: [...this.state.percentCalculators.list.rate, newRate]}}})
  //   console.log(this.state.percentCalculators)
  // }
  
  addDollarCalc = () => {
    let dolCalcLength = this.state.dollarCalculators.total.length;
    this.setState({dollarCalculators: {total: [...this.state.dollarCalculators.total, `dolCalc${dolCalcLength}`]}})
    console.log(this.state.dollarCalculators)
  }

  clearCalculators = () => {
    this.setState({percentWizards: {total: []}});
    this.setState({dollarWizards: {total: []}});
    // this.setState({percentCalculators: {total: [], list: []}});
    // this.setState({dollarCalculators: {total: [], list: []}});
  }

  onPercentFormSubmit = (promptState, rateState) => {
    this.setState({ percentPrompts: [...this.state.percentPrompts, promptState]});
    this.setState({ rates: [...this.state.rates, rateState]});
    console.log("perPromptState" + this.state.percentPrompts);
    console.log("RateState" + this.state.rates)
  }

  onDollarFormSubmit = (promptState, dollarState) => {
    this.setState({ dollarPrompts: [...this.state.dollarPrompts, promptState]});
    this.setState({ dollars: [...this.state.dollars, dollarState]});
    console.log("dolPromptState" + this.state.dollarPrompts);
    console.log("dolState" + this.state.dollars)
  }

  render() {

    return (
      <div>
        <Navigation />
        <Header />
        <div className="flex flex-wrap">
          <div className="w-auto w-third-l">
            <Generators
              setPercentWizCount={this.addPercentWiz}
              setDollarWizCount={this.addDollarWiz}
              clearAll={this.clearCalculators}
              />
          </div>
          <div className="w-auto w-third-l">
            <Wizards
              percentWizardCount={this.state.percentWizards.total}
              dollarWizardCount={this.state.dollarWizards.total}
              addPercentCalc={this.addPercentCalc}
              addDollarCalc={this.addDollarCalc}
              onPerPromptChange={this.onPerPromptChange}
              onDolPromptChange={this.onDolPromptChange}
              onRateChange={this.onRateChange}
              onDolChange={this.onDolChange}
              //form submit
              onPercentFormSubmit={this.onPercentFormSubmit}
              onDollarFormSubmit={this.onDollarFormSubmit}
              perPromptState={this.state.percentPrompts}
              perDollarState={this.state.dollarPrompts}
              rateState={this.state.rates}
              dollarState={this.state.dollars}
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
