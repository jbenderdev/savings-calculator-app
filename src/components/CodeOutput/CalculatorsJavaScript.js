    //Currently experimenting on localhost with best way to render this code for the end user!
    
    import React from "react";
    import PercentCalculatorJavaScript from "./PercentCalculatorJavaScript";
    import DollarCalculatorJavaScript from "./DollarCalculatorJavaScript";
    
    class Calculators extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                percentCalculators: {
                    total: [{ "name": "PercentWizard0", "prompt": "Here is Percent Calculator 1 Prompt", "rate": "5" }, { "name": "PercentWizard1", "prompt": "Here is Percent Calculator 2 Prompt", "rate": "6" }]
                },
                dollarCalculators: {
                    total: [{ "name": "DollarWizard0", "prompt": "Here is Dollar Calculator 1 Prompt", "rate": "5" }, { "name": "DollarWizard1", "prompt": "Here is Dollar Calculator 2 Prompt", "rate": "6" }]
                },
            }
        }

        render() {
            const percentCalcRender = this.props.percentCalculators.map((key, count) =>
                <div
                    className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                    id={key} 
                    key={count}>
                        <PercentCalculatorJavaScript
                        percentCalculator={this.state.percentCalculators}
                        calcId={count}
                        />
                </div>
            )
            const dollarCalcRender = this.props.dollarCalculators.map((key, count) =>
                <div
                    className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                    id={key}
                    key={count}>
                        <DollarCalculatorJavaScript
                        dollarCalculator={this.state.dollarCalculators}
                        calcId={count}
                        />
                </div>
            )
        
            return (
                <div className="tc mh2">
                    <h2 className="f3 lh-copy fw4 white-90">3. See your calculators below:</h2>
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