import React from "react";
import PercentCalculator from "./PercentCalculator";
import DollarCalculator from "./DollarCalculator"
class Calculators extends React.Component {

    render() {
        const percentCalcRender = this.props.percentCalculators.map((key, count) =>
            <div id={key} key={count}>
                <PercentCalculator
                percentCalculator={this.props.percentCalculators}
                calcId={count}
                />
            </div>
        )
        const dollarCalcRender = this.props.dollarCalculators.map((key, count) =>
            <div id={key} key={count}>
                <DollarCalculator
                calcId={count}
                />
            </div>
        )
    
        return (
            <div className="tc ph4">
                <h2>3. See your calculators below!</h2>
                <div>
                    {percentCalcRender}
                </div>
                <div>
                    {dollarCalcRender}
                </div>
            </div>
        )
    }
}

export default Calculators;