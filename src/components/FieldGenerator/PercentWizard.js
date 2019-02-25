import React from "react";

class PercentWizard extends React.Component {
    constructor (props) {
        super(props);
        this.handlePromptChange = this.handlePromptChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
    }
      
    //   handleChange (evt) {
    //     this.setState({ [evt.target.name]: evt.target.value });
    //     evt.preventDefault();
    //     console.log(this.state.prompt)
    //     console.log(this.state.rate)
    //   }
      handlePromptChange (e) {
        this.props.onPerPromptChange(e.target.value);
        e.preventDefault();
        // console.log(this.props.perPromptState) <--created infinite, browser-crashing loop
        //it is currently populating the field with the changed contents of the state
        //this means that the state is changing(good) but you need to fix the repopulation thing
        //ALSO note the query strings at the top--these will submit when you submit the form, and that's what you want to change the state
      }

      handleRateChange (e) {
        this.props.onRateChange(e.target.value);
        e.preventDefault();
        // console.log(this.props.rateState) <--created infinite, browser-crashing loop
      }

    // handlePromptChange = () => {
    //     let text = this.value;
    //     this.props.handlePromptChange(text)
    // }

    render() {
        const perPromptState = this.props.perPromptState;
        const rateState = this.props.rateState;
        return (
            <div className="ba br2 mb3">
                <form>
                    <h3>Enter the text that prompts your customers for their current rate:</h3>
                        <p><input
                            onChange={this.handlePromptChange}
                            // value={perPromptState}
                            className="br2" 
                            type="text"
                            name="prompt"
                            placeholder="eg.: What is your current monthly rate?"/>
                            </p>
                    <h3>Enter your business's rate (this will not display)</h3>
                        <p><input
                            onChange={this.handleRateChange}
                            // value={rateState}
                            className="br2"
                            type="text"
                            name="rate"
                            placeholder="eg.: 4.5"/>
                            %</p>
                    <button
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                    onClick={() => {
                        this.props.addPercentCalc();
                    }}
                    >Create Percent Calculator</button>
                </form>
            </div>
        )
    }
}

//this.state.prompt, this.state.rate);
//evt.preventDefault()
export default PercentWizard;