import React from "react";

class PercentWizard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            prompt: [],
            rate: []
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
        this.props.onPercentFormSubmit(this.state.prompt, this.state.rate);
        e.preventDefault();
        console.log(e.target)
    }

    render() {
        return (
            <div className="ba br2 mb3">
                <form onSubmit={this.handleFormSubmit}>
                    <h3>Enter the text that prompts your customers for their current rate:</h3>
                        <p><input
                            onChange={this.handleChange}
                            className="br2" 
                            type="text"
                            name="prompt"
                            placeholder="eg.: What is your current monthly rate?"/>
                            </p>
                    <h3>Enter your business's rate (this will not display)</h3>
                        <p><input
                            onChange={this.handleChange}
                            className="br2"
                            type="text"
                            name="rate"
                            placeholder="eg.: 4.5"/>
                            %</p>
                    <button
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                    >Update Percent Calculator</button>
                </form>
            </div>
        )
    }
}

export default PercentWizard;