import React from "react";

class Result extends React.Component {

    calculateResult() {
        let ourRate = this.props.partnerWizard.rate;
        let customerRate = this.props.customerRate;
        if (ourRate - customerRate > 0) {
            let savings = ourRate - customerRate;
            return `We can save you up to ${savings}%`;
        }
        else {
            return `We can match your current rate!`
        }
    }

    render() {
        const result = `${this.calculateResult}`
        return (
            <div>
                <p>{result}</p>
            </div>
        )
    }
}

export default Result;