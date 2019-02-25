import React from "react";

class PercentCalculator extends React.Component {

    render() {
        // const calculateSavings = () => {
        //     let thisKey = item
        //     let linkedWiz = {document.getElementById.div}
        //     let businessRate = document.getElementById;
        //     let b = setPercent;
        //     if (a - b > 0) {
        //         return a - b;
        //     }
        //     else {
        //         return `Your current rate can't be beat!`
        //     }
        // }
        return (
            <div className="ba br2 mb3">
                <div>
                    <h3>What is your current rate?</h3>
                        <p><input 
                            className="br2" 
                            type="text"
                            placeholder="4"/>
                            %</p>
                        <button
                            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                        >See your savings!</button>
                    <h3>Enter your business's rate (this will not display)</h3>
                        <p><input
                            className="br2"
                            type="text"
                            placeholder="eg.: 4.5"/>
                            %</p>
                </div>
            </div>
        )
    }
}

export default PercentCalculator