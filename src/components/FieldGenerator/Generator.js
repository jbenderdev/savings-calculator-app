import React from "react";

class Generator extends React.Component {

    render() {
    return (
        <div className="tc ph4">
            <h2 className="f3 lh-copy fw4 white-90">1. Add / remove calculators:</h2>
                <div className="pv4 ph4 mh4 ba br2 bg-white-40 b--white-30 shadow-4">
                    <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                        onClick={() => this.props.setPercentWizCount()}>Add percent calculator</button>
                    <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-green"
                        onClick={() => this.props.setDollarWizCount()}>Add dollar calculator</button>
                    <button
                        className="f6 f4-l f5-m fw3 link dim br3 ph3 pv2 mb2 dib white bg-dark-pink"
                        onClick={() => this.props.clearAll()}>Clear all calculators</button>
                </div>
        </div>
    )
}
}

export default Generator;