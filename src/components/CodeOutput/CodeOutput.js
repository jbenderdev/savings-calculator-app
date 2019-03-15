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
    
        if (this.props.percentCalculators.length === 0 && this.props.dollarCalculators.length === 0) {
            return (
                <div>
                </div>
            );
        } else {
            return (
            <div className="mh2">
                <h2 className="tc f3 lh-copy fw4 white-90">4. Insert the code below into your website to display your calculators:</h2>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator HTML (paste directly into your site's HTML):</h3>
                    <div>
                        {perCalcHtmlRender}
                        {dolCalcHtmlRender}
                    </div>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator CSS (paste directly into your site's stylesheet or head):</h3>
                    <div className="f7 fw3 ph2 dark-gray center pv1 mb2 mh4 ba br2 bg-white-40 b--white-30 shadow-4 w-60 f6-ns">
                        {`.savings-calculator {
                        text-align: center;
                        padding-left:.5rem;
                        padding-right:.5rem;
                        padding-top:.25rem;
                        padding-bottom:.25rem;
                        margin-bottom:.5rem;
                        margin-left:2rem;
                        margin-right:2rem;
                        border-style:solid;
                        border-width:1px;
                        border-radius:.25rem;
                        background-color:rgba(255,255,255, 0.4);
                        border-color:rgba(255,255,255, 0.3);
                        box-shadow:2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )
                    }

                    .form-h2 {
                        font-size:1.25rem;
                        font-weight:300;
                        line-height:1.5;
                        color: #333333;
                    }

                    .form-p {
                        font-size:1rem;
                        font-weight:300;
                        line-height:1.5;
                        color: #333333;
                    }

                    .percent-form-input {
                        margin-bottom:.5rem;
                        width:30%;
                        padding-right:1rem;
                        border-top-width:0;
                        border-right-width:0;
                        border-left-width:0;
                        border-bottom-width:1px;
                        border-bottom-style:solid;
                        background-color: rgba( 255,255,255, 0.0 );
                    }

                    .dollar-form-input {
                        margin-bottom:.5rem;
                        width:30%;
                        padding-left:1rem;
                        border-top-width:0;
                        border-right-width:0;
                        border-left-width:0;
                        border-bottom-width:1px;
                        border-bottom-style:solid;
                        background-color: rgba( 255,255,255, 0.0 );
                    }

                    .form-button {
                        font-size:.875rem;
                        text-decoration:none;
                        transition:color .15s ease-in;
                        opacity:1;
                        transition:opacity .15s ease-in;
                        border-radius:.5rem;
                        padding-left:1rem;
                        padding-right:1rem;
                        padding-top:.5rem;
                        padding-bottom:.5rem;
                        margin-bottom:.5rem;
                        display:inline-block;
                        color:#FFFFFF;
                        background-color:#137752
                    }

                    .percent-fix {
                        display: inline-block;
                        position: relative;
                        right: 1rem
                    }

                    .dollar-fix {
                        display: inline-block;
                        position: relative;
                        left: 1rem
                    }

                    @media only screen and (min-width: 768px) {
                        .form-button {font-size:1rem}
                        .percent-form-input {font-size:1rem}
                        .dollar-form-input {font-size:1rem;}
                    }

                    @media only screen and (min-width: 992px) {
                        .formH2 {font-size: 1.5rem}
                        .formP {font-size:1.25rem}
                        .percent-form-input {font-size:1.25rem}
                        .dollar-form-input {font-size:1.25rem}
                        .form-button {font-size:1.25rem}
                    }`}
                    </div>
                <h3 className="tc f4 lh-copy fw3 white-90">Calculator JavaScript (I will be adding the React Component JS here soon!)</h3>
                <div>
                </div>
            </div>
        )
        }
    }
}

export default CodeOutput;