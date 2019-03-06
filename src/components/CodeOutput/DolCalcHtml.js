import React from "react";

class DolCalcHtml extends React.Component {
    
    render() {
        
        const promptText = this.props.dollarCalculator[this.props.calcId].prompt;
        const calcId = this.props.calcId + 1;

        return (
            <div>
                <h3 className="tc f5 f4-l fw3 lh-copy dark-gray">Dollar Calculator {calcId} HTML</h3>
                    <div>
                    <p className="f7 f6-ns fw3 ph2 dark-gray">
                    {`<div class="savings-calculator">
                        <form>
                            <h2 class="form-h2">${promptText}</h2>
                                <p class="form-p">
                                <span class="position: relative; left: 1rem">$</span>
                                    <input
                                    class="dollar-form-input"
                                    type = "number"
                                    step="0.01"
                                    min="0"
                                    name="customerRate"
                                    placeholder="15.00">
                                </p>
                            <button class="form-button">See your savings!</button>
                        </form>
                    </div>`}
                    </p>
                    </div>
            </div>
        )
    }
}

export default DolCalcHtml;