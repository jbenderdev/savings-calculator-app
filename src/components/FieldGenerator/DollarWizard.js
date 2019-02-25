import React from "react";

class DollarWizard extends React.Component {

    render() {
        return (
            <div className="ba br2 mb3">
                <div>
                    <h3>Enter the text that prompts your customers for their current price:</h3>
                        <p><input
                            className="br2"
                            type="text"
                            placeholder="eg.: What is your current monthly fee?"/>
                            </p>
                    <h3>Enter your business's price (this will not display)</h3>
                        <p><input
                            className="br2"
                            type="text"
                            placeholder="eg.: $10"/>
                            %</p>
                    <button
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                    onClick={() => this.props.addDollarCalc()}
                    >Create Calculator</button>
                </div>
            </div>
        )
    }
}

export default DollarWizard;