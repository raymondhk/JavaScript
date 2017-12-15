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
