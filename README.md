# Javascript
*notes on javascript*


some reminders:
> **'The Big Three':**
> **HTML, CSS, & JavaScript**
## Javscript Intro
**Javascript is an interpreted language**
> At runtime, an interpreter parses the JavaScript we wrote and turns it into machine code for the computer. Contrary to a compiled langauge

**JavaScript is an event-drive programming lanauge**

> The layer of behavior between the UI and the back-end. Creating a <button> in HTML does not mean the button does anything. However, clicking the button is an **event** that JavaScript can listen for. Consider that the HTTP request and response cycle is also based around user-driven events, you might notice how these technologies overlap and work together!

**JavaScript is run on a single thread**

> JavaScript runs one command at a time, never performing operations concurrently. The **event loop** is a specialized queue that allows JavaScript to dynamically add new operations when the events happen, even if it is already performing operations. Sometimes JavaScript is referred to as 'non-blocking' (perhaps erroneously).

## ECMAScript & ES6
**A Historical Look**
> Originally it was called Mocha during development, then changed to LiveScript after the first beta release, finally Netscape again renamed it to JavaScript off of the success of popular Java.

**ECMAScript**
> Nowadays JavaScript is the de facto front end scripting language of the internet. Because it's so widely used a 'master reference' was needed. ECMA, European Computer Manufacture's Associate, maintains the current up-to-date standardization of JavaScript. ECMAScript, aka ES, ended up being nothing more than a comprise amongst the different organizations. *ES is the standardization of Javascript and JavaScript is the implementation of the ECMA Standard*

**ES6**
> ES6 is the newest standard. ES6 is a superset of ES5. The vast majority of existing  JavaScript is still ES5, including libraries, legacy code bases, and examples you encounter on the web. Many of ES6's most important featers are *syntactic sugar*.

## Variables
A variable is a specific spot in memory labelled by a name. We can store anything we want into that memory location and later refer to the value of the memory by using the label we gave it.
**Variable Storage**
Variables can hold any kind of JavaScript datatype. The list includes:
- Strings
- Numbers
- Arrays
- Objects
- Functions
- Booleans
- undefined
- null
- References

**Passed by Reference**

In JavaScript, variables are passed by reference. Consider the below example:
```javascript
var x = [1,2,3];
var y = x;
x.push('Hello world!')
```
Conventional wisdom would say that variable x now contains [1,2,3, 'Hello world!'], while y still contains [1,2,3]. Because variables are passed by reference in the above snippet we are not creating a new location in memory instead we gave y a *reference* to the memory location of x.

**ES6 - Additional Declarations**

**var**
> var is used for declaring function-scoped variables. Prior to ES6, var was used for all variable declarations.

**let**
> let is used for declaring block-scoped variables.

**const**
> const is used for declaring constants. This is for when you need to store information that should never be updated.

## Strings
**Introduction**

> Strings are one of the most useful data types in any language we work with. 

**ES6 String Interpolation**
```javascript
let firstName = "Oscar";
let lastName = "Vazquez";
let message = `Hello, my name is ${firstName} ${lastName}`;
```

**Special Characters**

- "\n" - creates a new line
- "\t" - creates a horizontal tab
- "\v" - creates a vertical tab
- "\u" - pass in unicode

## Conditionals
**Most common types of conditionals**

- **if** - runs the code block if the specified condition evaluates true
- **else** - second part of 'if', runs if the first conditional evaluates false
- **else if** - specifies a new condition after an 'if' or another 'if else', only evaluates if the prior conditional is false

**The Truth**

The question we ask inside our conditional can only be answered with being true or being false.

List of falsey statements in JavaScript:
- false
- null
- undefined
- 0
- NaN
- ""

**Common boolean operators for Conditionals**
- < -- less than
- \> -- greater than
- <= -- less than or equal to
- \>= -- greater than or equal to
- == -- is equal to value (Abstract Value Comparison)
- === -- is equal to value and type (Strict Equality Comparison)
- ! -- inverse (not)
- || -- or
- && -- and

> Extra Notes on == vs ===

> The Abstract equality comparison performs a type conversion. While the Strict comparison checks **type**.
```javascript
console.log(3 == "3"); // true
console.log(3 === "3"); // false
```

**Switch Case**

- If you don't like creating huge complex if-else trees, consider learning switch-case statements.

- The switch statement executes a block of code depending on different cases.

- Use switch to select one of many blocks of code to be executed.

- The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure. If the there is a match, the associated block of code is executed.

- The switch statement is often used together with a break or a default keyword (or both).

```javascript
var a = 100;
var b = NaN;
switch (true) {
  case isNaN(a) || isNaN(b):
    console.log('NaNNaN');
    break;
  case a === b:
    console.log(0);
    break;
  case a < b:
    console.log(-1);
    break;
  default:
    console.log(1);
}
```

## Arrays
**Introduction**

> Arrays are important for grouping data and keeping it in a particular indexed order. We can imagine arrays as being like filing cabinets, with each drawer labeled with a number, or an index. Arrays have a **zero-based index** which means our indexes start at 0!

**Array Basics**
- .push() -- adds a new element to the end of an array
- .pop() -- removes an element at the end of the array
- [index] -- the index allows us to examine a single element of our array
- .length -- allows us to check how many elements our array has

Check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more information and all Methods.

*Last note: In JavaScript, Arrays are actually object. This makes it tricky to identify if a variable is an array or not because often times it will get identified as an object.*

# Loops
**Introduction**

> Loops are programming constructs that allow us to repeat or 'loop' instructions to the computer. At a very basic level loops keep us from repeating ourselves.

### Types of Loops
**for**
> The basic for loop is good for when you know exactly how many times your code should run.

**while**
> A while loop is great for when we don't know how many times we want to repeat our code. You can think of a while loop as the middle ground between a for loop and an if statement. It is a single condition, and while it remains true, the body of the loop will keep running.

**do/while**
> Very similar to the while loop, a do/while loop iterates **before** the condition is checked. See example below:
```javascript
let num = 6;
do {
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
while (num < 6);
console.log("We are done. Goodbye world!");
```

### Break & Continue
**break**
> For when we need to break out of a loop early.
```javascript
let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Kadie'){
        console.log('Kadie is in our array!');
        break;
    }
}
console.log('We finished looping!');
```

**continue**
> We can use the keyword continue to force our loop onto the next interation.
```javascript
let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Steve'){ continue };
    console.log(names[i]);
};
```

## Functions
**Introduction**

> A function is a block of code that can be saved for later use. Functions can be given inputs and return values. Think of functions as factories: we put in raw materials, a set of instructions are run, and we are returned a final result.

**Declaring**
```javascript
function sayName(name){
    console.log("Hello my name is " + name);
};
sayName('Morty');
```
This is a **standalone** function, it starts with the keyword ```function```. In this example:
- **identifier** is ```sayName```
- **parameter** is ```name```

**Invoking**

With the **identifier** we can invoke it on other places of our code by typing the **identifier** + (). When we see () without the keyword function -- think **invocation**!!

**Returns**

Unless explicitly stated a function will return undefined by default. A ```return``` will end the function. If we write any more instructions after a return statement they will not run. **A function call is equal to whatever that function returns**

**A Function By Any Other Name**

```javascript
// -- standalone function ---
function sayName1(name){
    console.log("Hello my name is " + name);
};
// -- anonymous function, stored in a variable --
let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};
```
**Types**

- **standalone** -- what we have discussed thus far, seen with keyword function and an identifier 
- **anonymous** -- a function without an identifier stored within a variable, functions stored in variables do not need function identifiers they are always invoked using the variable name
- **immediately invoked function expression (self-executing anonymous function)** -- where the declaration immediately calls itself, contains two major parts: 1. part is the anonymous function with lexical scope enclosed within the **grouping operator** () 2. creating the immediately executing function expression

**immediately invoked function expression (IIFE)** 
```javascript
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"
```
Assigning the IIFE to a variable does not store it but stores its result.

**ES6 Arrow Functions**

In ES6 the arrow functions are a concise way of writing anonymous functions. Arrow functions have some specific scoping rules:
- does not have its own this
    - until arrow functions every new function defined its own this value, the this value of the enclosing execution context is used
```javascript
    function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}
```
- does not have its own **arguments object**
    - arguments become a reference to the arguments of the enclosing scope
- arrow functions are best suited for non-method functions
- does not have its own super
- does not have its own new.target

## DOM Manipulation
**Introduction**

> One of the things that makes JavaScript so useful is that it can directly interface with the HTML of a webpage, through DOM (Document Object Model). Think of the DOM as a tree with <html> as the main trunk and all other HTML elements as branches

**Selecting Elements**

We must put the script tag after the body so our HTML elements have time to load. If we run our script too early the document object won't be filled up by our HTML. This is why we use $(document).ready() with JQuery.

Using the document object we can fetch a particular element by its unique id. See example:
```html
<html>
<body>
    <div id="message">
        Hello World!
    </div> 
<script>
    let x = document.getElementById("message").innerHTML; 
    console.log(x);
</script>   
</body>
</html>
```

**Modifying Elements**

Using innerHTML we can actually force new information into the DOM. We can pass HTML as a JavaScript string and create new HTML elements.

**.createElement and .appendChild**

.innerHTML isn't always the best way to add new HTML. When we modify it, that area of the DOM needs to be rebuilt on the fly. See example of using .createElement and .appendChild
```html
<html>
<body>
    <ol id="fruit">
        <li>Bananas</li>
        <li>Oranges</li>
        <li>Apples</li>
    </ol>
<script>
    let new_fruit = document.createElement("li");
    // create an empty li
    new_fruit.innerHTML = "Pears";
    // modify its innerHTML content with a string
    document.getElementById("fruit").appendChild(new_fruit);
    // append our new DOM element to the id 'fruit'
</script>   
</body>
</html>
```

## Objects
**Introduction**

As complexity of data increases so is the need for organizing it. A **hash table** allows us to track data on a more granular level. In JavaScript the most common implementation of a hash table is the JavaScript object.

JavaScript objects are a set type that store key-value pairs. Different from an array, which simply indexes values. Most of what we see in JavaScript is created by objects.

The standard syntax of a JavaScript object is represented by opening and closing 'curly' braces { }.
```javascript
let sandwich = {
    slices_of_bread: 2,
    ham: true,
    veggies: ['lettuce', 'tomato', 'onion']
};
```
Note that we can store multiple different datatypes within our object

Objects are not ordered but we can access any of the values provided we have the key.

**Iterating Objects**

Objects are not indexed so to iterate over an object's value we would have to use **for-in loop**.
```javascript
// here is an object literal with four key-value pairs
let sandwich = {
    cheese: 'Smoked Gouda',
    meat: 'Dry-aged Bison',
    sauce: 'Chipotle Aioli',
    veggies: 'Caramelized Onions'
}
// the variable 'topping' is used instead of an index
for(let topping in sandwich){
    // when we log 'topping', we notice it's a key
    console.log(topping);
    // when we pass the key to the 'sandwich' object, we can pull values
    console.log(sandwich[topping]);
}
```

## Scope
**Introduction**

At base level JavaScript has function scoping, meaning that when we declare variables inside of a function they are only accessible to that function. **Function calls create new scope**
```javascript
function addNumbers(a,b){
    var sum = a+b;
    return sum;
}
console.log(sum) // error! the variable sum isn't defined outside of the function addNumbers
```
**Global Scope** -- refers to everything in our global namespace. *Note Global scope is never actually empty, our global variables share the same namespace with all of the objects JavaScript already makes available to us, like console, document, and Math.*

In the example above the Global scope contains no variables.

Something a little more complex:
```javascript
function addNumbers(a,b){
    var sum = a+b;
    return sum;
}
function addArrayElements(array){
    var array_sum = 0;
    var array_length = array.length;
    for(var i = 0; i < arr_length; i++){
        addNumbers(array_sum,array[i]);
    }
    return array_sum
}
var new_sum = addArrayElements([3,4,5])
// addNumbers scope
// available variables: sum

// addArrayElements scope
// available variables: array_sum, array_length, i

// Global scope
// available variables: new_sum
```
And then if we nested:
```javascript
function addArrayElements(array){
    var array_sum = 0;
    var array_length = array.length;
    for(var i = 0; i < arr_length; i++){
        addNumbers(array_sum,array[i]);
    }
    function addNumbers(a,b){
        var sum = a+b;
        return sum;
    }
    return array_sum
}
var new_sum = addArrayElements([3,4,5])
// addNumbers scope
// available variables: sum, array_sum, array_length, i

// addArrayElements scope
// available variables: array_sum, array_length, i

// Global scope
// available variables: new_sum
```
**Key Takeways**
- each function has access to all the variables in its parent function
- no function has access to the variables in its child functions
- your entire .js file can be thought of as the outermost function or 'global' scope

## Hoisting
**Introduction**

When we send JavaScript to the browser the interpreter breaks it down in two steps. First is *parses* the code and ensures that it's all viable JavaScript syntax. Second it runs the code. JavaScript does not run your code line by line. Enter hoisting.

**Variable Hoisting with var**
```javascript
console.log(magicalUnicorns)
```
This will throw a *ReferenceError: magicalUnicorns is not defined*. This is an example of a parsing error, our code never ran.
```javascript
console.log(magicalUnicorns); // what would you expect from this??
var magicalUnicorns = "awesome"
```
Instead of getting a *ReferenceError* instead we got undefined in our console. What's happening here is our variable is being **hoisted**.

In Javascript **variable declarations are hoisted to the top of their scope**. Here's how the interpreter reads the previous example:
```javascript
var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
console.log(magicalUnicorns); // we log it as undefined
magicalUnicorns = "awesome" // the assignment stays exactly where it was
```
On the flip side, *let* does not allow us to do this. The following would produce a *ReferenceError*
```javascript
console.log(magicalUnicorns); 
let magicalUnicorns = "awesome!";
```
**Hoisting in Functions**

Earlier we said that **function calls create their own scope** how would the following run?
```javascript
var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);
```
Here's the breakdown:
```javascript
var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo
```
Two takeways:
- **Functions act like a cage, preventing declarations from rising past**
- **Standalone functions also get hoisted**

**Key Rules of Hoisting**
- variable declarations rise to the top of their scope like hot air balloons
- functions create their own scope and act like cages
- assignments, or = signs act like anchors, they stay put no matter how the code is rearranged
- let and const will throw an error if called before they get assigned

# OOP (Object Oriented Programming)
**Introduction**

Understanding OOP principles is the key to making your code more organized and modular. 

**JavaScript uses a functional programming style**. This means that Classes aren't a core part of the JavaScript language and JavaScript isn't inherently Object Oriented. However, we **pair JavaScript Objects and Functions to create Constructors that can mimic an Object Oriented Programming style**.

## Constructors and new
**Introduction**

When talking about OOP we're really talking about classes. With a class, much like with a function, we can write reusable code and avoid repeating ourselves. Classes behave similarly as a car manufacturer. By using one class, we can create many identical copies, or **instances**, of whatever that class produces.

**Constructor basics**

In ES5 we have no ```class``` keyword. Instead we write functions that act as Object Constructors, or blueprints. Here's an example:
```javascript
function personConstructor(name, age) {
    // an object literal that will be returned
    const person = {};
    // attributes of a person
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called 'methods'.
    // this is our first method, greet
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    // finally, this function must return an instance
    return person;
}
// create the 'steve' instance, run greet
const steve = personConstructor("Steve", 27);
steve.greet();
// create the 'anika' instance, run greet. note that it is different.
const anika = personConstructor("Anika", 33);
anika.greet();
// finally note how we can refine the greet method for any particular instance
const emily = personConstructor("Emily", 22);
emily.greet = function() {
    console.log("I am the greatest, ever!");
};
emily.greet();
```
**An Object Constructor is a function that returns objects.** Every instance is unique and we can modify their methods at any time.

**this and new**

We can use the ```this``` keyword to store our attributes and methods and the ```new``` keyword to create new instances.
```javascript
function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
```
In the above example ```this``` will refer to each individual instance when the Object Constructor is run. Without returning an object literal by default it seems like our constructor is no longer constructing. ```new``` creates and instance of the object. Remember ```this``` and ```new``` go together. If you're using ```this``` in your Constructor, you **must** create new instances with ```new```!

## Scope and this

When you see:
```javascript
console.log(this)
```
What you should be seeing is the window object. ```this``` always refers to its immediate parent, the context in which it is called. By not having a function or an object, ```this``` defaults to whatever its current parent scope is.

**Privacy**

Using hoisting rules of ES5 within scope we can leverage this to create private variables within our Object Constructor.
```javascript
// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age) {
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
const eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!
```
We cannot access the private methods, the next example shows how:
```javascript
function Person(name, age) {
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod(); // however this refers to the window
    }
}
const joe = new Person("Joe", 23);
joe.greet();
```
**The ```this``` keyword is still referring to the window!** When we attach methods and attributes to ```this``` they remain accessible. However, the moment we run ```pirvateMethod``` we create a new scope and the context of ```this``` changes.

**The 'this' problem workaround**

Storing reference to ```this``` helps solve scoping problems with private methods.
```javascript
function Person(name, age) {
    // create a private variable that stores a reference to the new object we create
    const self = this;
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
const joe = new Person("Joe", 23);
joe.greet();
```
We create a private variable called ```self``` that retains the reference to the object we just constructed. Now we can use ```self``` in place of ```this``` within private methods to avoid losing access to ```this```.

We can additionally *chain* methods together by returning ```this```. Essentially whenever we tell a public or prototype method to ```return this```, we're asking for the entire object back, this lets us chain function calls together.

**.prototype**

In JavaScript all objects have prototype that they inherit methods and properties from. Check out the example below:
```javascript
const MyObjConstructor = function(name) {
  const myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function() {
    console.log( "I am a method");
  };
}
const obj1 = new MyObjConstructor('object1');
const obj2 = new MyObjConstructor('object2');
console.log(obj1); // we are able to see our object
obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
```
```__proto__``` stands for **prototype** which is how objects in JavaScript share properties and methods. You can set a new property which only obj1 can access and obj2 cannot. However if you access ```___proto___``` on one object it will affect both!

This is because they both share a **prototype** object since they're both instances of **MyObjConstrutor**. This is how JavaScript does inheritance! Every object constructor creates a second memory space for *all* objects created by that constructor that is accessed by **proto**. It is one memory space, so any changes there affect every object spit out by that constructor.

**Major PROS of Prototype**
- one memory space for all! If you are creating lots of the same object and use prototype, it can save you significant memory
- great for general methods for objects
- we can access **prototype** methods with just using .method or .property
- the interpreter will go through all **prototypes** in the prototype chain to check if any of them have the called method or property before giving up (it'll return/use the first match it finds)

**Major CONS of Prototype**
- methods generated in prototype cannot access the private variables inside the constructor function
- lots of prototypes can be hard to read

The above way is bad practice, this is how we should be doing it:
```javascript
MyObjConstructor.prototype.methodName = function() {
  //do stuff here!
}
```

Adding methods to the shared prototype will improve performance of our code significantly when creating thousands of instances. However, on a smaller scale it is better to balance **readability**.

## ES6 Classes
**Introduction**
With ES6 JavaScript developers now have access to the ```class``` keyword. However: **ES6 Classes are just syntatic wrappers around the Object Constructors mentioned above.** Under the hood Classes and Object Constructors largely behave the same way. An Example of ES6 Class:
```javascript
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('You created a Dot!')
    }
}
let dot1 = new Dot(10,10);
```
**Note: Classes are NOT hoisted. No matter what, the class keyword will stay where it was written and not move during interpretation**

More examples:
ES5 vs ES6
```javascript
// Old ES5 way
function Dot(x, y) {
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation = function() {
    console.log("This Dot is at x " + this.x + " and y " + this.y);
}
const dot1 = new Dot(55, 20);
dot1.showLocation();
// New ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot2 = new Dot(5, 13);
dot2.showLocation();
```

[Practical work with classes](concepts/ninjas.js)
[Questions](questions.md)