function charecter(name,profession,gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.strength = strength;
    this.hitPoints = hitPoints;

this.printStats= (){

console.log ("Name"+ this.name + "\nProfession" + this.profession + "\nGender" + this.gender + "\nStrength" + this.strength + "\nHitPoints" + this.hitPoints )
 console.log("\n-----------------------------------\n");
};

this.isAlive = function()){
    if (this.hitpoints > 0){
        console.log(this.name + "is still alive")
    }
    this.attack=attack;
    this.levelUp=levelUp;
}