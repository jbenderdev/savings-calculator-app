import React from "react";
import Result from "./Result";

class DollarCalculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            customerPrice: null,
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.resultRender = this.resultRender.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({submitted: false})
        e.preventDefault();
        console.log(this.state.customerPrice)
    }

    resultRender(e) {
        this.setState({submitted: true});
        e.preventDefault();
        console.log(this.state.submitted)
    }

    render() {
        const partnerWizard = this.props.dollarCalculator[this.props.calcId];
        const promptText = partnerWizard.prompt;
        const businessPrice = partnerWizard.dollar;
        if (this.state.submitted) {
        return (
            <div className="ma0">
                <form onSubmit={this.resultRender}>
                    <h2 className="f3 lh-copy green fw4">{promptText}</h2>
                        <p className="f4 lh-copy green fw4">$
                            <input
                            onChange={this.handleChange} 
                            className="f5 lh-copy green fw2 br2 mb2 w-20" 
                            type="number"
                            step="0.01"
                            min="0"
                            name="customerPrice"
                            placeholder="4"
                            />
                            </p>
                        <button
                            className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-green shadow-2"
                        >See your savings!</button>
                </form>
                <div>
                    <Result 
                    customerRate={this.state.customerPrice}
                    businessRate={businessPrice}
                    wizardObject={this.props.dollarCalculator}
                    />
                </div>
            </div>
        );
        } else {
            return (
                <div className="ma0">
                    <form onSubmit={this.resultRender}>
                        <h2 className="f3 lh-copy green fw4">{promptText}</h2>
                            <p className="f4 lh-copy green fw4">$
                                <input
                                onChange={this.handleChange} 
                                className="f5 lh-copy green fw2 br2 mb2 w-20" 
                                type="number"
                                step="0.01"
                                min="0"
                                name="customerPrice"
                                placeholder="4"
                                />
                                </p>
                            <button
                                className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-green shadow-2"
                            >See your savings!</button>
                    </form>
                </div>
            );
        }
    }
}

export default DollarCalculator