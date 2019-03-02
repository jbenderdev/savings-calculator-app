import React from "react";

class SavingsResult extends React.Component {
    render() {
        let businessRate = parseFloat(this.props.businessRate);
        let customerRate = parseFloat(this.props.customerRate);
        let savings = parseFloat(customerRate - businessRate);
        return (
            <div>
                <p>We can save you up to {savings}%!</p>
            </div>
        )
    }
}

export default SavingsResult;