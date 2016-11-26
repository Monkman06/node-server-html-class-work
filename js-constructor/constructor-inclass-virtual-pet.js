//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
var DigitalPal= function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function() {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("no thanks! I'm full.");
        }
    };

    this.sleep = function() {
        if (this.sleepy===true) {
            console.log("zzzzzzzzzzzz");
            this.hungry = false;
            this.sleepy = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired!");
        }
    };

this.play = function() {
        if (this.bored === true) {
            console.log("yay! let's play!");
            this.bored = false;
            this.sleepy = true;
        } else {
            console.log("not right now, maybe later!");
        }
    };

    //METHOD WHICH TAKES IN A SECOND OBJECT AND DECREASES THEIR "hitpoints" BY THIS CHARACTER'S STRENGTH//
    this.increaseAge = function() {
         this.sleepy= this.age;
    };
        this.age += 1;
        
    }
}