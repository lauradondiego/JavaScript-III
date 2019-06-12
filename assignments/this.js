/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL BINDING - when 'this' is in the global scope, it will return in the console Object
* 2. IMPLICIT BINDING - when there is a dot before the function, the object before that dot, is the 'this'
* 3. NEW BINDING - a constructor function that returns an object. You have to call it with the 'new' keyword
* 4. EXPLICIT BINDING - you use the .call or .apply method to explicity definre 'this'. You can override other info
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayFavoriteAnimal(favoriteAnimal) {
    console.log(this);
    return favoriteAnimal;
  }
  sayFavoriteAnimal('Cat');

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Come here and walk my cat,',
    walkCat: function(name) {
      console.log(`${this.greeting} ${name} right now!`);
      console.log(this);
    }
  };
  myObj.walkCat('Kyle,');

// Principle 3

// code example for New Binding

function MyCatsNames(greeter) {
    this.greeting = 'Hey there ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const kyle = new MyCatsNames('Mimi');
  const mimi = new MyCatsNames('Kyle');
  
  kyle.speak();
  mimi.speak();

// Principle 4

// code example for Explicit Binding

const coolStuff = {
    name: 'Kyle',
    breed: 'Tabby',
    owner: 'my owner',
    favoriteFood: 'Chipotle'
    
}
const myHobbies = ['sleeping', 'eating', 'knocking over cups of water']

function kylesStory(trait1, trait2, trait3) {
    return `Meow, my name is ${this.name}, I think I am a ${this.breed}, I like to piss off ${this.owner}, by ${trait3} in my free time, when I am not ${trait1} or ${trait2}. I hope ${this.owner} leaves her ${this.favoriteFood} out again so I can finish it then pretend it was the dog!`
}

kylesStory.apply(coolStuff, myHobbies)