import React from "react";
import Result from "./Result.js"

class PercentCalculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            customerRate: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        console.log(this.state.customerRate)
    }

//need to get Result.js reading this component's state and rendering correctly

    render() {
        const partnerWizard = this.props.percentCalculator[this.props.calcId];

        const result = () =>
            <div>
                <Result 
                result={this.state.result}
                partnerWizard={this.partnerWizard}
                customerRate={this.state.customerRate}
                />
            </div>

        const promptText = partnerWizard.prompt;

        return (
            <div className="ba br2 mb3">
                <form>
                    <h2>{promptText}</h2>
                        <p><input
                            onChange={this.handleChange} 
                            className="br2" 
                            type="text"
                            name="customerRate"
                            placeholder="4"/>
                            %</p>
                        <button
                            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                        >See your savings!</button>
                </form>
                <div>
                    {result}
                </div>
            </div>
        )
    }
}

export default PercentCalculator;