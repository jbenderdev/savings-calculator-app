import React from "react";
import PercentWizard from "./PercentWizard"
import DollarWizard from "./DollarWizard"

class Wizards extends React.Component {

    render() {
        const percentWizardRender = this.props.percentWizardCount.map((count, key) =>
            <div id={count} key={key}>
                <PercentWizard
                onPerPromptChange={this.props.onPerPromptChange}
                onRateChange={this.props.onRateChange}
                perPromptState={this.props.perPromptState}
                rateState={this.props.rateState}
                wizardId={this.id}
                />
            </div>
        )
        const dollarWizardRender = this.props.dollarWizardCount.map((count, key) =>
            <div id={count} key={key}>
                <DollarWizard
                addDollarCalc={this.props.addDollarCalc}
                onDolPromptChange={this.props.onDolPromptChange}
                onDolChange={this.props.onDolChange}
                perDollarState={this.props.perDollarState}
                dollarState={this.props.dollarState}
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