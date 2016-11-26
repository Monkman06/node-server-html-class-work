var fs = require('fs');

// reads from movies.txt
// "utf" peramater or the code willl provide strem data
// stores contents of reading inside data varaible
fs.readFile("best_things_ever.txt", "utf8", function(error, data){
  var dataArr = data.split(",");

for (var i=0; i<output.length; i++){ // loops through the newly created output array

  console.log(output[i]);// prints each ememnt/ itmem of array
}
});