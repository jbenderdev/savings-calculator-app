import React from "react";

class PerCalcHtml extends React.Component {
    
    render() {
        
        const promptText = this.props.percentCalculator[this.props.calcId].prompt;
        const calcId = this.props.calcId + 1;

        return (
            <div>
                <h3 className="tc f5 f4-l fw3 lh-copy dark-gray">Percent Calculator {calcId} HTML</h3>
                    <div>
                        <p className="f7 f6-ns fw3 ph2 dark-gray">
                        {`<div class="savings-calculator">
                            <form id="PercentCalculator${calcId}">
                                <h2 class="form-h2">${promptText}</h2>
                                    <p class="form-p">
                                        <input
                                        id="perCalcInput${calcId}"
                                        class="percent-form-input"
                                        type = "number"
                                        step="0.01"
                                        min="0"
                                        name="customerRate"
                                        placeholder="4.50">
                                        <span class="position: relative; right: 1rem">%</span>
                                    </p>
                                <button class="form-button">See your savings!</button>
                            </form>
                            <p id="perCalcResultField${calcId}"></p>
                        </div>`
                        }
                        </p>
                    </div>
            </div>
        )
    }
}

export default PerCalcHtml;