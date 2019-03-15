//Currently experimenting on localhost with best way to render this code for the end user!

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
        let difference = (parseFloat(customerRate) - parseFloat(businessRate)).toFixed(2);
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
                <p className="f5 lh-copy dark-gray fw3 f4-l">We can save you up to {this.state.renderSavings}!</p>
            </div>
        )
    }
}

export default SavingsResult;