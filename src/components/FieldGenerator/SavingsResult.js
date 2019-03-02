import React from "react";

class SavingsResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            renderSavings: ""
        }
    } 

    componentDidMount() {
        let businessRate = this.props.businessRate;
        let customerRate = this.props.customerRate;
        let difference = parseFloat(customerRate) - parseFloat(businessRate);
        //this is a really bad conditional, but it works for now
        if (JSON.stringify(this.props.wizardObject).includes('dollar')) {
            this.setState({renderSavings: `$${difference}`});
        } else {
            this.setState({renderSavings: `${difference}%`});
        }
        console.log('renderSavings= ' + this.state.renderSavings)
    }

    render() {
        return (
            <div>
                <p>We can save you up to {this.state.renderSavings}!</p>
            </div>
        )
    }
}

export default SavingsResult;