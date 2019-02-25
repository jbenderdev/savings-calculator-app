import React from "react";
import PercentCalculator from "./PercentCalculator";
import DollarCalculator from "./DollarCalculator"
class Calculators extends React.Component {

    render() {
        const percentCalcRender = this.props.percentCalculators.map((count, key) =>
            <div id={count} key={key}>
                <PercentCalculator
                />
            </div>
        )
        const dollarCalcRender = this.props.dollarCalculators.map((count, key) =>
            <div id={count} key={key}>
                <DollarCalculator
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