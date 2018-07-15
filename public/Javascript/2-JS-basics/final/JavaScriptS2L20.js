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
/*
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
*/

// The Ternary Operatior and Switch Statements

/*
var firstName = 'john';
var age = 17.1;

//Teranry Operator:
age > 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement:

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
      console.log(firstName + ' teaches kids how to code.');
      break;
    case 'driver':
      console.log(firstName + ' drives an uber in Lisbon.');
      break;
    case 'designer':
      console.log(firstName + ' designs beautiful websites.');
      break;
    default:
      console.log(firstName + ' does something else.');
}

// Using a switch as a true/false:
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;serve

  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/
/*
// Truthy and Falsy Values and Equality operators
// Falsy values: undefined, null, 0, '', Nan
// Truthy values:  NOT falsy Values

var height;
height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT defined');
}

// Equality operators
if (height === '23') {
  console.log('The == operator does type coercion')
}
*/

/*
var Johns1 = 200
var Johns2 = 200
var Johns3 = 200
var Mikes1 = 200
var Mikes2 = 200
var Mikes3 = 200
var mary1 = 200
var mary2 = 200
var mary3 = 200

var johnsAvg = (Johns1 + Johns2 + Johns3)/3;
var mikesAvg = (Mikes1 + Mikes2 + Mikes3)/3;
var maryAvg = (mary1 + mary2 + mary3)/3;


console.log ((Johns1 + Johns2 + Johns3) / 3);
console.log ((Mikes1 + Mikes2 + Mikes3) / 3);
console.log ((mary1 + mary2 + mary3) / 3);
console.log (johnsAvg);
console.log (mikesAvg);
console.log (maryAvg);

if (johnsAvg > mikesAvg) {
  console.log('Johns Average is higherand it is ' + johnsAvg);
} else if ( mikesAvg > johnsAvg) {
  console.log('Mikes Average is higher and it is '+ mikesAvg);
} else {
  console.log('Neither Average is higher they are in a tie');
}

// Second, adding a third person (mary)

if (johnsAvg > mikesAvg && johnsAvg > maryAvg) {
  console.log('John\'s average score is higher than Mike or Mary at ' + johnsAvg);
} else if (mikesAvg > johnsAvg && mikesAvg > maryAvg) {
  console.log('Mike\'s average score is higher than John or Mary at ' + mikesAvg);
} else if (maryAvg > johnsAvg && maryAvg > mikesAvg) {
  console.log('Mary\'s average score is higher than John or Mike at ' + maryAvg);
} else{
  console.log('There is a draw.');
}
*/

/*
//Functions:

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageDennis = calculateAge(1965);
var ageJane = calculateAge(1985);
console.log(ageJohn, ageDennis, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1965, 'Dennis');
yearsUntilRetirement(1940, 'Jane');
*/
