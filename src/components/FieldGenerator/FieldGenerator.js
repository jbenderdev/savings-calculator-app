import React from "react";

//need to modify to affect App.js state
//import the Wizards into App.js instead and add conditionals to CreateFields in App.js
const FieldGenerator = ({addPercentField, addDollarField}) => { 
    return (
        <div className="flex flex-wrap">
            <div className="fl w-third tc">
                <p>What type of pricing do you use?</p>
                <button className="" onClick={addPercentField}>Percentage (%)</button>
                <button className="" onClick={addDollarField}>Dollar ($)</button>
            </div>
            <div className="fl w-third tc">
                <p>What type of pricing do you use?</p>
                <button className="" onClick={addPercentField}>Percentage (%)</button>
                <button className="" onClick={addDollarField}>Dollar ($)</button>
            </div>
            <div className="fl w-third tc">
                <p>What type of pricing do you use?</p>
                <button className="" onClick={addPercentField}>Percentage (%)</button>
                <button className="" onClick={addDollarField}>Dollar ($)</button>
            </div>
        </div>
    )
}

export default FieldGenerator;