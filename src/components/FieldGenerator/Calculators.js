import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import PercentCalculator from "./PercentCalculator";
import DollarCalculator from "./DollarCalculator"
class Calculators extends React.Component {

    render() {
        const percentCalcRender = this.props.percentCalculators.map((id, count) =>
            <div
                className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                id={id.name} 
                key={count}>
                    <PercentCalculator
                    percentCalculator={this.props.percentCalculators}
                    calcId={count}
                    />
            </div>
        )
        const dollarCalcRender = this.props.dollarCalculators.map((id, count) =>
            <div
                className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                id={id.name}
                key={count}>
                    <DollarCalculator
                    dollarCalculator={this.props.dollarCalculators}
                    calcId={count}
                    />
            </div>
        )
    
        return (
            <div className="tc mh2">
                <h2 className="f3 lh-copy fw4 white-90">3. See your calculators below:</h2>
                <div>
                    <CSSTransitionGroup
                    transitionName="calculator-fade"
                    transitionEnterTimeout={400}
                    transitionExitTimeout={0}
                    >
                        {percentCalcRender}
                    </CSSTransitionGroup>
                </div>
                <div>
                    <CSSTransitionGroup
                    transitionName="calculator-fade"
                    transitionEnterTimeout={400}
                    transitionExitTimeout={0}
                    >
                        {dollarCalcRender}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Calculators;