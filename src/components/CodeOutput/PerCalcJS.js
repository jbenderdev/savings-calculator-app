import React from "react";

class PerCalcJS extends React.Component {

    render() {

        const perCalcRate = this.props.percentCalculator[this.props.calcId].rate;
        const calcId = this.props.calcId + 1;
        const savingsText = "`We can save you up to ${difference}%!`";
        const type = "per";

        return (
            <div>
                <h3 className="tc f5 f4-l fw3 lh-copy dark-gray">Percent Calculator {calcId} JavaScript</h3>
                    <div>
                        <p className="f7 f6-ns fw3 ph2 dark-gray">
                        {
                            `<script>
                            let ${type}Calc${calcId}Rate = ${perCalcRate};
                            let ${type}Calc${calcId}Submitted = false;
                            let ${type}CalcCustomerRate${calcId} = undefined;
                            let ${type}CalcSavings${calcId} = undefined;

                            document.getElementById("PercentCalculator${calcId}").addEventListener('submit', ${type}RateSubmit${calcId});

                            function ${type}CalculateSavings${calcId}() {
                                if (${type}Calc${calcId}Submitted = true) {
                                    let difference = (parseFloat(${type}CalcCustomerRate${calcId}) - parseFloat(${type}Calc${calcId}Rate)).toFixed(2);
                                        if (difference > 0) {
                                            ${type}CalcSavings${calcId} = ${savingsText};
                                        } else {
                                            ${type}CalcSavings${calcId} = "We can match your current rate!"
                                        }
                                } else {
                                    ${type}CalcSavings${calcId} = undefined;
                                }
                                ${type}ShowResult${calcId}();
                            }

                            function ${type}ShowResult${calcId}() {
                                document.getElementById("${type}CalcResultField${calcId}").innerHTML = ${type}CalcSavings${calcId};
                            }

                            function ${type}RateSubmit${calcId}(e) {
                                e.preventDefault();
                                ${type}Calc${calcId}Submitted = true;
                                let ${type}SubmittedRate${calcId} = document.getElementById("${type}CalcInput${calcId}").value;
                                ${type}CalcCustomerRate${calcId} = ${type}SubmittedRate${calcId};
                                ${type}CalculateSavings${calcId}();
                            }
                            </script>`
                        }
                        </p>
                    </div>
            </div>
        )
    }
}

export default PerCalcJS;

