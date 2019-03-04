import React from "react";

class PercentWizard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prompt: "",
            rate: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        console.log(this.state.prompt)
        console.log(this.state.rate)
    }

    handleFormSubmit(e) {
        this.props.onPercentFormSubmit(this.props.wizardId, this.state.prompt, this.state.rate);
        e.preventDefault();
    }

    render() {
        const headerText = `Percent Wizard ${this.props.wizardId + 1}`
        return (
            <div className="ma0">
                <form onSubmit={this.handleFormSubmit}>
                    <h2 className="f3 lh-copy dark-blue fw4">{headerText}</h2>
                        <h3 className="tc f4 lh-copy dark-blue fw4">Enter the text that asks your customers for their current rate:</h3>
                            <p>
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-blue fw2 br2 w-80"
                                    type="text"
                                    name="prompt"
                                    placeholder="eg.: What is your current monthly rate?"
                                    />
                            </p>
                        <h3 className="tc f4 lh-copy dark-blue fw4">Enter your business's rate (this will not display)</h3>
                            <p className="f4 lh-copy dark-blue fw4">
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-blue fw2 br2 mb2 w-20"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    name="rate"
                                    placeholder="eg.: 4.5"
                                    />
                            %</p>
                        <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue shadow-2"
                        >Update Percent Calculator</button>
                </form>
            </div>
        )
    }
}

export default PercentWizard;