import React from "react";
import Result from "./Result";

class PercentCalculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            customerRate: null,
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.resultRender = this.resultRender.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({submitted: false})
        e.preventDefault();
        console.log(this.state.customerRate)
    }

    resultRender(e) {
        this.setState({submitted: true});
        e.preventDefault();
        console.log(this.state.submitted)
    }

    render() {
        const partnerWizard = this.props.percentCalculator[this.props.calcId];
        const promptText = partnerWizard.prompt;
        const yourRate = partnerWizard.rate;
        if (this.state.submitted) {
        return (
            <div className="ba br2 mb3">
                <form onSubmit={this.resultRender}>
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
                    <Result 
                    customerRate={this.state.customerRate}
                    businessRate={yourRate}
                    wizardObject={this.props.percentCalculator}
                    />
                </div>
            </div>
        );
        } else {
            return (
                <div className="ba br2 mb3">
                    <form onSubmit={this.resultRender}>
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
                </div>
            );
        }
    }
}

export default PercentCalculator;