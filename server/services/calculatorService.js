const validator = require('validator');

// Function to add two values add(numA, numB)
// returns javascript object containing
// input values, operator, and answer
let  add = (numA, numB) => {

    // Define variables
    let calcAnswer;

    // Validate input and calculate answer
    if(validator.isNumeric(numA) && validator.isNumeric(numB)) {
        calcAnswer = Number(numA) + Number(numB);
    }
    else {
        calcAnswer = "validation failed"
    }

    // Return a json object with results
    const result = {
        a: numA,
        b: numB,
        operator: "+",
        answer: calcAnswer
    };
    console.log("result: ", result);
    return result;
}

module.exports = {
    add
}