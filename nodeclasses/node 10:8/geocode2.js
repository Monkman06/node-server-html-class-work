
var geocoder = require('geocoder');
var inquirer = require('inquirer');

inquirer.prompt([
{
    type: "input",
    message: "Which location or landmark would you like to geocode?",
    name: "userInput"
  }


  ]).then(function(location){
    geocoder.geocode(location.userInput, function(err,data){

      console.log(JSON.stringify(data,null,2));
    });
  })
