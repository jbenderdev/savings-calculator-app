import React from "react";

class Wizards extends React.Component {
    constructor(props){
        super(props);
    }
// getPercentWizards() {
//     let wizardCount = []
//     if (this.props.percentWizardCount ) {
//        wizardCount.push()
//     }
//     if (stats.energy > 100) {
//        badgeList.push(<i className="fa fa-times-circle" style={{color: "blue"}}></i>)
//     }
//     return wizardCount
// }

//     const getPercentWizards = ( {percentWizards} ) => {
//     let wizards = {percentWizards};
//     wizards.map();
//     return wizards
// };

    render() {
        return "number of wizards:" + this.props.percentWizards
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