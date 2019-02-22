import React from "react";
import PercentWizard from "./PercentWizard"
import DollarWizard from "./DollarWizard"

class Wizards extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const percentWizNumber = Number(this.props.percentWizardCount.length)
        const dollarWizNumber = Number(this.props.dollarWizardCount.length)
        const percentWizardRender = this.props.percentWizardCount.map((wizNumber) =>
            <div>
                <PercentWizard key={percentWizNumber}/>
            </div>
        )
        const dollarWizardRender = this.props.dollarWizardCount.map(() =>
            <div>
                <DollarWizard key={dollarWizNumber}/>
            </div>
        )

        //create a function that inserts the wizNumber as an id in percentWizardRender's div
        //create a function that inserts the wizNumber as an id in percentWizardRender's div

        return (
            <div>
                <h2>2. Enter your pricing information:</h2>
                <div>
                    {percentWizardRender}
                </div>
                <div>
                    {dollarWizardRender}
                </div>
            </div>
        )
    }

    

    // render() {

    // }


    // renderStats() {
    //     return this.props.users.map((stats) => {
    //         return (
    //             <Td className="align-middle" column="badges">{ this.getPercentWizards(this.props.percentWizardCount) }</Td>
    //         );
    //     });
    // }

// const Wizards = ( {percentWizards, dollarWizards} ) {
//     render() {
//         return ( 
//             <Table>
//                 { this.renderStats() } 
//             </Table>
//         );
//     }
//     }
}
export default Wizards;