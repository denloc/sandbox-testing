/*  Variables

var firstName = 'John';
console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);
*/

/*
var firstName = 'John';
var age = 28;

//Type coercion: Changes number to a string*/
// console.log(firstName + ' ' + age)




/* Keeps age a number:*/
// console.log(firstName, age)



/*
// Type coercion:
var job = 'Teacher';
var isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? '
+ isMarried);

//Variable mutation:
age = 'Twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? '
+ isMarried);

//Prompting for a variable, the browseer stores this info:
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
// Math Operators
var now = 2018
var yearJohn = 28;
var yearMark = 33;
console.log(now - yearJohn)
console.log(now - yearMark)

// Logical operators
var johnOlder = yearJohn > yearMark;
console.log(johnOlder);

//typeof operators
console.log(typeof johnOlder);
console.log(typeof yearJohn);
*/

//Operator precendence:

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Oeprators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple assignmenets
var x, y;
x = y =(3 + 5) * 4 -6;
console.log(x, y);

//More operators
// x = x * 2; Also works
x *= 2;
console.log(x);
x += 10;
console.log(x);
*/

// If/Else statments

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.');
}

var massMark = 34;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s');
} else {
  console.log('John\'s BMI is higher than Mark\'s');
}



//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? '
//+ markHigherBMI);
*/


// Boolean Logic

var firstName = 'John';
var age = 17;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
