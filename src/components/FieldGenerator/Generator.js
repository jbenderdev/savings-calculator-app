import React from "react";

class Generators extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
        <div className="ph5">
            <h2>1. Add or remove calculators:</h2>
            <button onClick={() => this.props.setPercentCount()}>Add percent calculator</button>
            {/* <button onClick={() => this.props.undoPercentCount()}>Remove percent calculator</button> */}
            <button onClick={() => this.props.setDollarCount()}>Add dollar calculator</button>
            {/* <button onClick={() => this.props.undoDollarCount()}>Remove dollar calculator</button> */}
        </div>
    )
}
}

export default Generators;