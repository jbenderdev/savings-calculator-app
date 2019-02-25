import React from "react";

class Generators extends React.Component {

    render() {
    return (
        <div className="tc ph4">
            <h2>1. Add / remove calculators:</h2>
            <button
                className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                onClick={() => this.props.setPercentWizCount()}>Add percent calculator</button>
            <button
                className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                onClick={() => this.props.setDollarWizCount()}>Add dollar calculator</button>
            <button
                className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-pink"
                onClick={() => this.props.clearAll()}>Clear all calculators</button>
        </div>
    )
}
}

export default Generators;