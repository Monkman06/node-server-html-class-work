var request = require('request');// grab request pacakage

request('https://en.wikipedia.org/wiki/Kudos_(granola_bar)'),
function (error, response, body){
  if (!error && response.statusCode == 200){// if equest was successful

console.log(body)
  }
};