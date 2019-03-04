import React from "react";

const Navigation = () => {
    return (
        <nav className="flex justify-between bb bl-0 br-0 bt-0 b--dashed b--white-70 bw.5">
            <div>
                <p className="f5 lh-copy fw5 white-90 pl4">Code-Free Savings Calculator Generator by John Bender</p>
            </div>
            <div>
                <p className="f5 lh-copy fw5 white-90 pr4"><a href="https://github.com/jbenderdev/savings-calculator-app" rel="noopener noreferrer" target="_blank">About</a></p>
            </div>
        </nav>
    )
}

export default Navigation;