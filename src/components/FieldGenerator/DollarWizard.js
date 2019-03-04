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
            <div className="ma0">
                <form onSubmit={this.handleFormSubmit}>
                    <h2 className="f3 lh-copy green fw4">{headerText}</h2>
                        <h3 className="f4 lh-copy green fw4">Enter the text that prompts your customers for their current price:</h3>
                            <p>
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy green fw2 br2 w-80"
                                    type="text"
                                    name="prompt"
                                    placeholder="eg.: What is your current monthly fee?"
                                    />
                            </p>
                        <h3 className="f4 lh-copy green fw4">Enter your business's price:</h3>
                            <p className="f4 lh-copy green fw4">$
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy green fw2 br2 mb2 w-20"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    name="dollar"
                                    placeholder="eg.: $10"
                                />
                            </p>
                        <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-green shadow-2"
                        >Update Dollar Calculator</button>
                </form>
            </div>
        )
    }
}

export default DollarWizard;