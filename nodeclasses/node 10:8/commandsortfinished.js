
// grab all of the command line arguments from node
var nodeArg= process.argv
//creates array that'll hold the all numbers(excluding the path & node command)
var numArray = [];
// creates for-loop that starts with **2** so we skip the path & node command from command line
// this loop will be used to build a numbers array
for (var i=2; i<nodeArg.length; i++){
// push (add) each of the numbers to numArray
// need to convert these numbers to "floats"(numbrs with decimals) otherwise, node will treat input as strings
numArray.push(parseFloat(nodeArg[i]));
}
//then print the original numbers
console.log(numArray);
//then print sorted numbers by using javascript sort function
console.log(numArray.sort(sortNums));
//______________________________________________________________
// this function is needed so js sort fuction knows to sort in numeric order. (default is alphabetic order)

function sortNums(a,b){
  return(a-b);
}

