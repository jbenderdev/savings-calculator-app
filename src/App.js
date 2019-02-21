import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Generators from "./components/FieldGenerator/Generator";
import Wizards from "./components/FieldGenerator/Wizards";
import Calculators from "./components/FieldGenerator/Calculators";
import "tachyons";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    input: '',
    percentCalculators: "",
    dollarCalculators: "",
    }
  }

//this function is active within the component; your error is inside addPercentField

//   addPercentField = () => {
//       return(
//         <div>
//           <PercentWizard />
//         </div>
//       )
// }

//this function is active within the component; your error is inside addDollarField

//   addDollarField = () => {
//     return(
//       <div>
//         <DollarWizard />
//       </div>
//     )
// }

  setPercentCount = (newPercentCount) => {
    this.setState({percentCalculators: newPercentCount});
    console.log(this.state.percentCalculators)
  }

  setDollarCount = (newDollarCount) => {
    this.setState({dollarCalculators: newDollarCount});
    console.log(this.state.dollarCalculators)
  }

//here's where the generator function will go, then the generator component will just inherit it OR you can just leave it here

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <div className="flex flex-wrap">
          <div className="fl w-third tc br bw3">
            <Generators className="fl w-third tc" setPercentCount={this.setPercentCount} setDollarCount={this.setDollarCount}/>
          </div>
          <div className="fl w-third tc">
            <Wizards percentWizards={this.state.percentCalculators} dollarWizards={this.state.dollarWizards}/>
          </div>
          <div className="fl w-third tc bl bw3">
            <Calculators className="fl w-third tc" percentCalculators={this.state.percentCalculators} dollarWizards={this.state.dollarCalculators}/>
          </div>
        </div>
      </div>
    )
  }  
}

export default App;
