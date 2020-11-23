// Import router package
const router = require('express').Router();

const calcService = require('../services/calculatorService.js');

/* Hand get requests for '/'
/* this is the index or home page
*/
router.get('/', function (req, res) {

    // Send a JSON response - this app will be a web api so no need to send HTML
    //res.end(JSON.stringify({message: 'This is the home page'}));
    res.json({content: 'This is the default route for calculator.'});

});

// add: /calculator/add?a=5&b=10
router.get('/add', function (req, res) {

    // Declare variables
    let numA = "";
    let numB = "";
    let answer;

    // Validate
    if (req.query.a != "" && req.query.b != "") {
        numA = req.query.a;
        numB = req.query.b;
    }

    answer = calcService.add(numA,numB);
    // Calculate the result
    res.json(answer);

});

// export
module.exports = router;
