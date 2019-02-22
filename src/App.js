import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Generators from "./components/FieldGenerator/Generator";
import Wizards from "./components/FieldGenerator/Wizards";
import Calculators from "./components/FieldGenerator/Calculators";
import "tachyons";
import './App.css';

const initialState = {
  percentCalculators: {
    total: []
  },
  dollarCalculators: {
    total: []
}
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  addPercentCalc = () => {
    let perCalcLength = this.state.percentCalculators.total.length;
    this.setState({percentCalculators: {total: [...this.state.percentCalculators.total, `perCalc${perCalcLength}`]}})
    console.log(this.state.percentCalculators)
  }

  //doesn't work correctly
  removePercentCalc = () => {
    let oldTotal = this.state.percentCalculators.total
    this.setState({percentCalculators: {total: oldTotal.splice(-1, 1)}})
    console.log(this.state.percentCalculators)
  }
  
  addDollarCalc = () => {
    let dolCalcLength = this.state.dollarCalculators.total.length;
    this.setState({dollarCalculators: {total: [...this.state.dollarCalculators.total, `dolCalc${dolCalcLength}`]}})
    console.log(this.state.dollarCalculators)
  }

  //different approach, but still doesn't work correctly
  removeDollarCalc = () => {
    let oldTotal = this.state.dollarCalculators.total
    let dolCalcLength = this.state.dollarCalculators.total.length
    let valueToRemove = `dolCalc${dolCalcLength}`
    this.setState({dollarCalculators: {total: oldTotal.filter(item => item !== valueToRemove)}})
    console.log(this.state.dollarCalculators)
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <div className="flex flex-wrap">
          <div className="fl w-third tc">
            <Generators
              className="fl w-third tc"
              setPercentCount={this.addPercentCalc}
              setDollarCount={this.addDollarCalc}
              undoPercentCount={this.removePercentCalc}
              undoDollarCount={this.removeDollarCalc}
              />
          </div>
          <div className="fl w-third tc">
            <Wizards percentWizardCount={this.state.percentCalculators.total} dollarWizardCount={this.state.dollarCalculators.total}/>
          </div>
          <div className="fl w-third tc">
            <Calculators className="fl w-third tc" percentCalculators={this.state.percentCalculators} dollarWizards={this.state.dollarCalculators}/>
          </div>
        </div>
      </div>
    )
  }  
}

export default App;
