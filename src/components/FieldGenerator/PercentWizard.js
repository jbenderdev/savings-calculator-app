import React from "react";

const PercentWizard = () => {
    return (
        <div className="ba br2 mb3">
            <div>
                <h3>Enter the text that prompts your customers for their current rate:</h3>
                    <p><input type="text" placeholder="eg.: What is your current monthly rate?"/></p>
                <h3>Enter your business's rate (this will not display)</h3>
                    <p><input type="text" placeholder="eg.: 4.5"/>%</p>
                <button>Create Calculator</button>
            </div>
        </div>
    )
}
export default PercentWizard;