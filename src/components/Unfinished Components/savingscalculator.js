//build each possible input field (dollar amt, flat quantity, percentage) separately and then create them as elements onClick
// const setPercent = input.value

// const percentCalc = inputPercent => {
//     let a = inputPercent;
//     let b = setPercent;
//     if (a - b > 0) {
//         return a - b;
//     }
//     else {
//         return `Your current rate can't be beat!`
//     }
// }

// const feeCalc = inputFee => {
//     let a = inputFee;
//     let b = setFee;
//     if (a - b > 0) {
//         return a - b;
//     }
//     else {
//         return `This fee is as low as it gets!`
//     }
// }

//The above works as long as you set a num value for setPercent
//Then hooking up to form inputs likely via id.input.value
//Then returning results of each function to front end using ${tokens} 
//Then sum savings + display total savings
//Adv. feat is average rate savings (input rate * # of transactions - set rate * # of transactions)
//Adv. feat is show/hide per-entry savings or total savings
//Adv. is displaying js code. What you want to probably do is createElement and the element is the total code for each field