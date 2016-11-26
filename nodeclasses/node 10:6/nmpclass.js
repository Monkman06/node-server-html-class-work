//NPM package for reading & writing files
var fs = require('fs');

//this block of code will create a file called "movies.txt"
//it will then print inception, die hard in the file
fs.writeFile("movies.txt", 'Inception', 'Die Hard', function(err){// will only run once callback is complete

// if code wexperiences any errors it will log the error to the console
  if (err){
    return console.log(err);
  }
  //otherwise, it will print: "movies.txt was updated"
  console.log("movies.tex was updated");
});
console.log("done!");// this will print 1st