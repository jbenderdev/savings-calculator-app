import React from "react";

const DollarWizard = () => {
    return (
        <div className="ba br2 mb3">
            <div>
                <h3>Enter the text that prompts your customers for their current price:</h3>
                    <p><input type="text" placeholder="eg.: What is your current monthly fee?"/></p>
                <h3>Enter your business's price (this will not display)</h3>
                    <p><input type="text" placeholder="eg.: $10"/>%</p>
                <button>Create Calculator</button>
            </div>
        </div>
    )
}

export default DollarWizard;