import React from "react";

const Navigation = () => {
    return (
        <nav className="flex justify-between">
            <div>
                <p className="pl4">Savings Calculator by John Bender</p>
            </div>
            <div>
                <p className="pr4"><a href="https://github.com/jbenderdev/savings-calculator/blob/master/README.md">About</a></p>
            </div>
        </nav>
    )
}

export default Navigation;