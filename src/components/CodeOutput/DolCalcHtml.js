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
                    {`<div class="savingsCalculator">
                        <form>
                            <h2 class="formH2">${promptText}</h2>
                                <p class="formP">
                                <span class="position: relative; left: 1rem">$</span>
                                    <input
                                    class="dollarFormInput"
                                    type = "number"
                                    step="0.01"
                                    min="0"
                                    name="customerRate"
                                    placeholder="15.00">
                                </p>
                            <button class="formButton">See your savings!</button>
                        </form>
                    </div>`}
                    </p>
                    </div>
            </div>
        )
    }
}

export default DolCalcHtml;