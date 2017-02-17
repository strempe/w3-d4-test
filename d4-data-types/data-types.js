//  // truly empty data type
// var emptyGlass = null;

// // truley undefined data type
// var outspace; 

// // Truly true aka boolean data type
// var truth = true; 
// var news = false; 

// // flasy stuff
// if (!undefined) {
//     console.log('falsy');
// }

// // truthy stuff
// if (2) {
//     console.log('turthy');
// }

// // Numbers
// 2
// 10.22
// 0.92
// -33325
// '2'  //this is a string! NOT a number

// console.log(value - value); //concatenates the strings

// console.log(2 * '2');  //adds the numbers

// console.log(Number(value) + Number(value)); //converts to actual numbers

//Every input field on a form is actually a string value, so you might need to convert those into Numbers.

// Math
// Math.random gives a random decimal number 
// var cosmos = Math.random()*100;
// console.log(cosmos);

// var round = Math.round(cosmos);
// console.log(round);

// var ceil = Math.ceil(cosmos);
// console.log(ceil);

// var floor = Math.floor(cosmos);
// console.log(floor);

// strings
// var doubleQuotedString = "Hello";
// var singleQuotedString = 'World\'s Best';
// var multilineString = `hey
// Everyone!`;

// doubleQuotedString + singleWuotedString + multilineString;

// var iAmWhispering = 'I AM WHISPERING';
// iAmWhispering = iAmWhispering.toLowerCase();
// console.log(iAmWhispering); 

// var iAmShouting = 'i am shouting';
// iAmShouting = iAmShouting.toUpperCase();
// console.log(iAmShouting);

// var word = 'Hat';
// word = word.slice(1, 2); //Slice chooses which character, only works with a string
// console.log(word);

// console.log(word.length) //Resturns the number - counts

// function iCap(headline) {
//     var firstletter = headline.slice(0, 1).toUppercase();
//     headline = firstLetter + headline.slice(1);
//     return headline; 
// }
// console.log(iCap('when is spring coming?'))

// var userInput = '      Sara    ';
// console.log(userInput);
// userInput = userInput.trim();

// var sayItAgain = 'Hacked.';
// sayItAgain = sayItAgain.repeat(500);
// console.log(sayItAgain);

// var userInput = '1';
// var filler = '0';
// userInput = filler.repeat(5 - userInput.length) + userInput;

// var address = '37291 Main Street';
// var hasStreet = address.includes('Street');
// console.log(hasStreet);

// var phoneNumber = '(888) 555 - 5555';
// var isCorectPhoneNumber = phoneNumber.match(/\d/g).length === 10;

// console.log(isCorrectPhoneNumber);

// var greeting = 'hey world';
// greeting = greeting.replace('hey', 'hello');
// console.log(greeting);

// console.log('hey world'.replace('hey', 'hello')); 

// //REPLACE is not greedy - heres how to make it greedy 
// var greeting = 'hey hey world';
// greeting = greeting.replace(/'hey'/g, 'hello');
// console.log(greeting);

// DATES - use moment.js

// CURRENCY - use account.js

// ARRAYS 
var listOfThings = ['cheese', 'pepperoni', 'crust', 'sausage'];
console.log(listOfThings[0]);
console.log(listOfThings.length);

console.log(listOfThings.reverse());

console.log('A sentence of character'.split(' ').reverse().join(''));

// OBJECTS
var anObject = {
    name = 'Sara'
};

console.log(anObject.name);4