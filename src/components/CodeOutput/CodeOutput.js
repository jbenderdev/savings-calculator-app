import React from "react";
import PerCalcHtml from "./PerCalcHtml";
import DolCalcHtml from "./DolCalcHtml";

class CodeOutput extends React.Component {

    render() {
        const perCalcHtmlRender = this.props.percentCalculators.map((key, count) =>           
            <div
                className="center ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4 w-60"
                id={key} 
                key={count}>
                    <PerCalcHtml
                    percentCalculator={this.props.percentCalculators}
                    calcId={count}
                    />
            </div>
        )
        const dolCalcHtmlRender = this.props.dollarCalculators.map((key, count) =>
            <div
                className="center ph2 pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4 w-60"
                id={key}
                key={count}>
                    <DolCalcHtml
                    dollarCalculator={this.props.dollarCalculators}
                    calcId={count}
                    />
            </div>
        )
    
        return (
            <div className="mh2">
                <h2 className="tc f3 lh-copy fw4 white-90">4. Insert the code below into your website to display your calculators:</h2>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator HTML (paste directly into your site's HTML):</h3>
                <div>
                    {perCalcHtmlRender}
                    {dolCalcHtmlRender}
                </div>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator CSS (paste directly into your site's stylesheet)</h3>
                <div>
                </div>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator JavaScript (paste directly into the head of your site's HTML)</h3>
                <div>
                </div>
            </div>
        )
    }
}

export default CodeOutput;