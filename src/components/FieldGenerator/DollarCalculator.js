import React from "react";

class DollarCalculator extends React.Component {

    render() {
        return (
            <div className="ba br2 mb3">
                <div>
                    <h3>What is your current rate?</h3>
                        <p><input 
                            className="br2" 
                            type="text"
                            placeholder="4"/>
                            %</p>
                    <h3>Enter your business's rate (this will not display)</h3>
                        <p><input
                            className="br2"
                            type="text"
                            placeholder="eg.: 4.5"/>
                            %</p>
                    <button
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                    >Create Calculator</button>
                </div>
            </div>
        )
    }
}

export default DollarCalculator