// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Data
// ===========================================================
var yoda = {
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
};

var darthmaul = {
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200
};

var jarJarBinks = {
    name: 'Jar Jar Binks',
    role: 'Supreme Sith Lord & Puppet Master',
    age: 30,
    forcePoints: 5000
};


// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
var macewindu = {
    name: 'Mace Windu',
    role: 'Jedi with purple lightsaber',
    age: 50,
    forcePoints: 800
};

//

// Routes
// ===========================================================
app.get('/', function (req, res) {
    res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', function (req, res) {
    res.json(yoda);
});

app.get('/mace', function (req, res) {
    res.json(macewindu);
});

app.get('/darthmaul', function (req, res) {
    res.json(darthmaul);
});

app.get('/jarJarBinks', function (req, res) {
    res.json(jarJarBinks);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});