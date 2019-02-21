import React from "react";

class Generators extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
        <div className="ph5">
            <h2>Select the number of calculators you want to make:</h2>
            <p>Percentage (rate comparison): 
            <select id="percentDropdown" onChange={() => this.props.setPercentCount(document.getElementById("percentDropdown").selectedIndex)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </p>
            {/* <button onClick={() => this.props.setPercentCount(count => {
                return document.getElementById("percentDropdown").selectedIndex */}
            {/* })}>Generate calculators</button> */}
            <p>Dollars (fixed cost comparison): 
                <select id="dollarDropdown" onChange={() => this.props.setDollarCount(document.getElementById("dollarDropdown").selectedIndex)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </p>
            {/* <button onClick={() => this.props.setDollarCount(count => {
                return document.getElementById("dollarDropdown").selectedIndex */}
            {/* })}>Generate calculators</button> */}
        </div>
    )
}
}

export default Generators;