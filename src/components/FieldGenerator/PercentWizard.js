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
                    <h2 className="f4 lh-copy dark-gray fw3 f3-l">{headerText}</h2>
                        <h3 className="tc f5 fw3 lh-copy dark-gray f4-l">Enter the text that asks your customers for their current rate:</h3>
                            <p>
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-gray fw3 mb2 w-80 bt-0 br-0 bl-0 bb bg-transparent f4-l"
                                    type="text"
                                    name="prompt"
                                    placeholder="What is your current monthly rate?"
                                    />
                            </p>
                        <h3 className="tc f5 fw3 lh-copy dark-gray f4-l">Enter your business's most competitive rate:</h3>
                            <p className="f5 f4-l fw3 lh-copy dark-gray">
                                <input
                                    onChange={this.handleChange}
                                    className="f5 lh-copy dark-gray fw3 mb2 w-30 pr3 bt-0 br-0 bl-0 bb bg-transparent f4-l"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    name="rate"
                                    placeholder="3.50%"
                                    />
                            <span className="relative right-1">%</span>
                            </p>
                        <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                        >Update Percent Calculator</button>
                </form>
            </div>
        )
    }
}

export default PercentWizard;