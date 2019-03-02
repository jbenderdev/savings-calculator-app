import React from "react";

class DollarWizard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prompt: "",
            dollar: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
    console.log(this.state.prompt)
    console.log(this.state.dollar)
    }

    handleFormSubmit(e) {
        this.props.onDollarFormSubmit(this.props.wizardId, this.state.prompt, this.state.dollar);
        e.preventDefault();
    }

    render() {
        const headerText = `Dollar Wizard ${this.props.wizardId + 1}`
        return (
            <div className="ba br2 mb3">
                <form onSubmit={this.handleFormSubmit}>
                    <h2>{headerText}</h2>
                        <h3>Enter the text that prompts your customers for their current price:</h3>
                            <p><input
                                onChange={this.handleChange}
                                className="br2"
                                type="text"
                                name="prompt"
                                placeholder="eg.: What is your current monthly fee?"/>
                                </p>
                        <h3>Enter your business's price:</h3>
                            <p><input
                                onChange={this.handleChange}
                                className="br2"
                                type="text"
                                name="dollar"
                                placeholder="eg.: $10"/>
                                %</p>
                        <button
                        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                        >Update Dollar Calculator</button>
                </form>
            </div>
        )
    }
}

export default DollarWizard;