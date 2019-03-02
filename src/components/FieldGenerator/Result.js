import React from "react";
import SavingsResult from "./SavingsResult";
import MatchResult from "./MatchResult";

class Result extends React.Component {
    render() {
        if (this.props.customerRate === null) {
            return (
                <div>
                    <p></p>
                </div>
            );
        }
        else if (this.props.customerRate - this.props.businessRate > 0) {
            return (
                <div>
                    <SavingsResult
                    businessRate={this.props.businessRate}
                    customerRate={this.props.customerRate}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <MatchResult />
                </div>
            )
        }
    }
}

export default Result;