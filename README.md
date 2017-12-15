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
