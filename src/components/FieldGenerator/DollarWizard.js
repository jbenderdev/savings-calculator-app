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
                    <h2 className="f4 lh-copy dark-gray fw3 f3-l">{headerText}</h2>
                        <h3 className="tc f5 fw3 lh-copy dark-gray f4-l">Enter the text that asks your customers for their current price:</h3>
                            <p>
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-gray fw3 mb2 w-80 bt-0 br-0 bl-0 bb bg-transparent f4-l"
                                    type="text"
                                    name="prompt"
                                    placeholder="What is your current monthly fee?"
                                    />
                            </p>
                        <h3 className="tc f5 fw3 lh-copy dark-gray f4-l">Enter your business's most competitive price:</h3>
                            <p className="f5 f4-l fw3 lh-copy dark-gray">
                            <span className="relative left-1">$</span>
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-gray fw3 mb2 w-30 pl3 bt-0 br-0 bl-0 bb bg-transparent f4-l"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    name="dollar"
                                    placeholder="10.00"
                                />
                            </p>
                        <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-green"
                        >Update Dollar Calculator</button>
                </form>
            </div>
        )
    }
}

export default DollarWizard;