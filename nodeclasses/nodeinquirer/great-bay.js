// Load the NPM Package inquirer
var inquirer = require('inquirer');

function post() {
    inquirer.prompt([
    {
        type: "choices",
        name: "typePost",
        choices: ["items", "tasks", "jobs", "projects"],
        message: "Under which category would you like to post?"
    },
    {
        type: "input",
        name: "name",
        message: "What do you want to post?"
    },
    {
        type: "input",
        name: "bid",
        message: "What would you like the starting bid to be?"
    }
    ]).then (function(result){
        connection.query("INSERT INTO auctions SET ?", {
           itemname: result.name,
           category: result.typePost,
           startingbid: result.bid
       }, function(err, result) {
           console.log("Your item was added to the database!");
       });
   })
}