var fs = reqiure('fs');

// reads from movies.txt
// "utf" peramater or the code willl provide strem data
// stores contents of reading inside data varaible
fs.readFile("movies.txt", "utf8", function(error, data){
 if (error)
 {
console.log(error);
}

else
{
  console.log(data);

  var dataArr = data.split(',');

  console.log(dataArr);


});