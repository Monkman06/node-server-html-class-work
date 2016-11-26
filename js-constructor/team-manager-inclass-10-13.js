//REQUIRE INQUIRER
var inquirer = require('inquirer');

//CONSTRUCTOR FUNCTION FOR CREATING Player OBJECTS
function Player(name, position, offense, defense) {
    this.name = name,
    this.position = position,
    this.offense = offense,
    this.defense = defense,
    //FLIPS A COIN: IF THE THE VALUE IS EQUAL TO 0 THEN this.offense GOES UP BY ONE. IF THE VALUE IS EQUAL TO 1
    this.goodGame = function() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.offense++;
            console.log(this.name + "'s offense has gone up!\n----------");
        } else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n----------");
        }
    },
    this.badGame = function() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n----------");
        } else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n----------");
        }
    },
    this.printStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
    }
}

//ARRAYS USED TO CONTAIN ALL OF OUR PLAYER OBJECTS
var starters = [];
var subs = [];
var score = 0;

//RECURSIVE FUNCTION WHICH WILL ALLOW THE USER TO CREATE 5 PLAYERS AND THEN WILL PRINT EACH PLAYER'S STATS AFTERWARDS
var createPlayer = function() {
    //IF THE LENGTH OF THE team ARRAY IS 8 OR HIGHER, NO MORE QUESTIONS WILL BE ASKED
    if (starters.length + subs.length < 8) {
        console.log("\nNEW PLAYER!\n");
        inquirer.prompt([{
            name: "name",
            message: "Player's Name: "
        }, {
            name: "position",
            message: "Player's position: "
        }, {
            name: "offense",
            message: "Player's Offensive Ability: ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "defense",
            message: "Player's Defensive Ability: ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {
            //RUNS THE CONSTRUCTOR AND PLACES THE NEW Player OBJECT INTO THE VARIABLE player.  TURNS THE offense AND defense VARIABLES INTO INTEGERS AS WELL WITH parseInt
            var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            //ADDS A PLAYER TO THE starters ARRAY IF THERE ARE LESS THAN FIVE Player OBJECTS IN IT. OTHERWISE ADDS THE NEWEST Player OBJECT TO THE subs ARRAY.
            if (starters.length < 5) {
                starters.push(player);
                console.log(player.name + " added to the starters");
            } else {
                subs.push(player);
                console.log(player.name + " added to the subs");
            }
            //RUNS THE createPlayer FUNCTION ONCE MORE
            createPlayer();
        })
    } else {
        playGame(0);
    }
}

//FUNCTION TO RUN THE GAME ITSELF. VARAIABLE X USED TO KEEP TRACK OF THE ROUNDS.
var playGame = function(x) {
    if (x<9){
      //ADDS ONE TO X &PRINTS THE CURRENT ROUND OF THE GAME
    x++;
    console.log("----------\nROUND" + x + "\n----------");
    //FINDS 2 RANDOM NUMBERS BETWEEN 1 & 100 TO COMPARE THE STARTER OBJECTS' STATS TO
    var offenseRandom=(Math.floor(Math.random() *50 ) +1);
    var defenseRandom=(Math.floor(Math.random() *50 ) +1);
    //LOOPS THROUGH THE STARTER ARRAY TO FIND IF THE TOTAL VALUE OF THEIR OFFENSE & DEFENSE
    var teamOffense=0;
    var teamDefense=0;
    for (var i=0; i< starters.length; i++){
        teamOffense += starters.length[i].offense;
        teamDefense += starters.length[i].offense;
    }
    console.log("Team Offense: "+ teamOffense);
    console.log("Team Defense: "+ teamDefense);
    console.log("Random O: "+ offenseRandom);
    console.log("Random D: "+ defenseRandom);
    //DETERMINES IF teamOffense IS LESS THAN offenseRandom & ADDS ONE TO SCORE IF TRUE
    if(offenseRandom < teamOffense) {
      console.log("YOU SCORED A POINT!");
      score++;
    }
    //DETERMINES IF teamDefense IS LESS THAN defenseRandom & SUBTRACTS ONE FROM SCORE IF TRUE
    if (defenseRandom > teamDefense){
      console.log("YOU WERE SCORED UPON!");
      score--;
    }
    // PROMPTS TO FIGURE OUT IF THE PLAYER WOULD LIKE TO MAKE A SUBSTITION
    inquirer.prompt([{
      name:"confirm",
      type: "confirm",
      message:"Would you like to make a substitution?"
    }]).then(function(answer){
     //if the answer is yes, start the substition prompts
     if (answer.confirm==true){
        inquirer.prompt([{
          name:"sub",
          type:"rawlist",
          message:"Who would you like to sub in?",
          //sets the name of all those contained within the subs array as choices
          choices:subs,
        }]). then(function(subIn){
//finds the player object within the subs array with the name that matched the users choice & places it within the sideline variable
        var sideline={};
        var number=0;
        for(var i=0; i < subs.length;i++){
          if (sub[i].name==subIn.sub){
            number=i;
            sideline=sub[i];
          }
        }
        inquirer.prompt([{
          name:"sub",
          type:"rawlist",
          message:"Who would you like to sub out?",
          choices: starters
        }]).then(function(subOut){
//finds the players object within the starters array with the name that matches the users choice swaps it with the value contained within sideline after moving them into the subs array
        for(var i=0; i<starters.length; i++){
          if (starters[i].name== subOut.sub){
            subs[number]=starters[i];
            startrs[i]=sideline;
            console.log("SUBSTITION MADE!");
          }
        }
        // starts the next round
        playGame(x);
        })
      })
      }else{
        //starts the next round
        playGame(x);
      }
    })
  }else{
    //prints the final score
    console.log("FINAL SCORE"+ score);
    //if the score was greater than 0, prints the winning message & increase starter stats
    if (score >0){
      console.log("Good game, everyone!\nYour current starters' stats have improved!");
      for (var i =0; i<starters.length; i++) {
          starters[i].goodGame();
      }
    }
    //if the score was less than 0, prints the losing message & decreases starters Stats
    if(score<0){
      console.log("That was a poor performance!\nYour current starters' stats have decreased!")
      for (var i=0; i<starters.length; i++){
          starters[i].badGame();
      }
      //if the score was zero, prints the tie message & does nothing to the starters stats
    }else{
       console.log("It was a tie game! Not good. Not bad.");
    }
//prompts the user if they would liek to play again. if yes,run playGame with a value of 0 being passed into it. if no, print the "come back again soon message"& exit
  inquirer.prompt({
    name:"again",
    type:"confirm",
    message:"Would you like to play another match?"
  }).then(function(answer){
    if(answer.again==true){
      playGame(0);
    }else{
      console.log("Come back again soon!");
    }
  })
  }
}

//calls the fuction createPlayers() to start the code
createPlayer();












