// Create a new class called Ninja with the following attributes:
//  - name
//  - health
//  - speed (private)
//  - strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default
//
// The Ninja class should have the following methods:
//  sayName() - This should log that Ninja's name to the console
//  showStats() - This should show the Ninja's Strength and Speed, as well as their health
//  drinkSake() - This should add +10 Health to the Ninja

function Ninja(name){
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;

    this.sayName = function(){
        console.log(`My name is ${this.name}`)
    }
    this.showStats = function(){
        console.log(`My name: ${this.name}`)
        console.log(`My health: ${this.health}`)
        console.log(`My speed: ${speed}`)
        console.log(`My strength: ${strength}`)
    }
    this.drinkSake = function(){
        this.health += 10;
    }
    this.getStrength = function(){
        return strength;
    }
}

let Jiraiya = new Ninja('Jiraiya');
console.log(Jiraiya.health);
Jiraiya.sayName();
Jiraiya.showStats();
Jiraiya.drinkSake();
Jiraiya.showStats();

Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){ // validation to check whether the ninja passed is an instance of a ninja
        ninja.health -= 5
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`)
    }
}

Ninja.prototype.kick = function(ninja){
    if(ninja instanceof Ninja){
        let damage = this.getStrength() * 15;
        console.log(damage)
        ninja.health -= damage;
        console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} Health!`)
    
    }
}

let Naruto = new Ninja('Naruto');
Jiraiya.punch(Naruto);
Naruto.showStats();
Naruto.kick(Jiraiya);
Jiraiya.showStats();