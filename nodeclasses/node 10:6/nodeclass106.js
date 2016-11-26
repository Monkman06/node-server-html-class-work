
// gets varaibles
var argOne = process.argv[2];
var argTwo = process.argv[3];

if (argOne === argTwo) {
  console.log(true);// prints equlity
}
else{
  console.log(false);
}

if ((argOne % 7) + (argTwo % 7) === 0){
  console.log(true);
}



// another apporave
console.log(process.argv[2] === process.argv[3]);

console.log((process.argv[2]%7)+process.argv[3]%7)