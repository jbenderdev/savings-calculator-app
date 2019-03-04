import React from "react";
import SavingsResult from "./SavingsResult";
import MatchResult from "./MatchResult";

class Result extends React.Component {
    render() {
        if (this.props.customerRate === null || this.props.businessRate === "") {
            return (
                <div>
                </div>
            );
        }
        else if (this.props.customerRate - this.props.businessRate > 0) {
            return (
                <div>
                    <SavingsResult
                    businessRate={this.props.businessRate}
                    customerRate={this.props.customerRate}
                    wizardObject={this.props.wizardObject}
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