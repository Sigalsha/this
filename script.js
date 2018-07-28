//this
//ex. 1
var person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            hungry = false;
            alert("I'm no longer hungry");
        }
    }
}
//person.feed();
//complete



//ex. 2

var pump = function(amount) {
    this.liters += amount;
    console.log("You put " + amount + " liters in " + this.name);  
};

var garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },

    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters );

garage.car2.fillTank(30);
console.log("Audi should have 31 liters: ", garage.car2.liters );
//complete


//ex. 3
var pumpFuel = function (plane) {
    plane.fuel += 1;
};

var airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!' ;
        }
        else {
            return 'flying!';
        }
    }
     
};

console.log('The plane should not fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('Can it fly now? ' + airplane.fly());
//complete


//ex. 4
//Create a method called stealCoins that takes a number parameter and decreases the tipJar's coins by that amount:
var tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    }
  };

  tipJar.stealCoins = function (num) {
        this.coinCount -= num ; 
  };



  tipJar.tip();
  console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);
//complete



  //ex. 5 
 // Fix the 3 syntax errors and 1 logical error
  var revealSecret = function () {
    return this.secret;
  };
  
  var shoutIt = function (person, func) {
    person.revealItAll = func;
    var result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  var avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  var narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
  //complete