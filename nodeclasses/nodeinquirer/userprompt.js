// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//  	- Basic input, 
//		- Password, 
//		- List, 
//		- Checkbox, 
//		- and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!
// ========================================================================
var inquirer = require('inquirer');
inquirer.prompt([
{
  type:"input",
  name:"",
  message:"",
},

{
type:"",
  name:"list",
  message:"",
  choices:["","" "" ]
},

{
type:"",
  name:"checkbox",
  message:"",
  choices:["","" "" ]
},

{
  type:"confirm",
  name:"",
  message:"",
},

{
  type:"password",
  name:"",
  message:"",
}

]).then(function.user) {
console.log(JSON.stringify(user,null,2));

if (user.myPassword)

}

