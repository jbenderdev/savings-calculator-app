import React from "react";

const Navigation = () => {
    return (
        <nav className="flex justify-between">
            <div>
                <p className="pl4">Code-Free Savings Calculator Generator by John Bender</p>
            </div>
            <div>
                <p className="pr4"><a href="https://github.com/jbenderdev/savings-calculator-app">About</a></p>
            </div>
        </nav>
    )
}

export default Navigation;