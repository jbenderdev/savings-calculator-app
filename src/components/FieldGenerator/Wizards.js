import React from "react";
import PercentWizard from "./PercentWizard"
import DollarWizard from "./DollarWizard"

class Wizards extends React.Component {

    render() {
        const percentWizardRender = this.props.percentWizardCount.map((count, key) =>
            <div id={count} key={key}>
                <PercentWizard
                onPercentFormSubmit={this.props.onPercentFormSubmit}
                wizardId={this.id}
                />
            </div>
        )
        const dollarWizardRender = this.props.dollarWizardCount.map((count, key) =>
            <div id={count} key={key}>
                <DollarWizard
                onDollarFormSubmit={this.props.onDollarFormSubmit}
                wizardId={this.id}
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