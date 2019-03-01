import React from "react";
import PercentWizard from "./PercentWizard"
import DollarWizard from "./DollarWizard"

class Wizards extends React.Component {

    render() {
        const percentWizardRender = this.props.percentWizardCount.map((key, count) =>
            <div id={key} key={count}>
                <PercentWizard
                onPercentFormSubmit={this.props.onPercentFormSubmit}
                wizardId={count}
                />
            </div>
        )
        const dollarWizardRender = this.props.dollarWizardCount.map((key, count) =>
            <div id={key} key={count}>
                <DollarWizard
                onDollarFormSubmit={this.props.onDollarFormSubmit}
                wizardId={count}
                />
            </div>
        )

        return (
            <div className="tc ph4">
                <h2>2. Enter your pricing information:</h2>
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