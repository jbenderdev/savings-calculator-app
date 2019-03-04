import React from "react";
import PercentWizard from "./PercentWizard"
import DollarWizard from "./DollarWizard"

class Wizards extends React.Component {

    render() {
        const percentWizardRender = this.props.percentWizardCount.map((key, count) =>
            <div 
                className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                id={key} 
                key={count}>
                    <PercentWizard
                    onPercentFormSubmit={this.props.onPercentFormSubmit}
                    wizardId={count}
                    />
            </div>
        )
        const dollarWizardRender = this.props.dollarWizardCount.map((key, count) =>
            <div
                className="tc ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4"
                id={key} 
                key={count}>
                    <DollarWizard
                    onDollarFormSubmit={this.props.onDollarFormSubmit}
                    wizardId={count}
                    />
            </div>
        )

        return (
            <div className="tc mh2">
                <h2 className="f3 lh-copy fw4 white-90">2. Enter your pricing information:</h2>
                    <div>
                        {percentWizardRender}
                    </div>
                    <div>
                        {dollarWizardRender}
                    </div>
            </div>
        )
    }
}
export default Wizards;