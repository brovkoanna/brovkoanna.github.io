// task 1
// let str1 = 'I\'m a string!';
// let str2 = "I'm a string!";
// console.log(str1.length);
// console.log(str2.length);
// console.log(str1===str2);
// console.log(str1==str2);

// task 2
// let string5 = "Hello World";
// let first1 = string5[0];
// let first2 = string5.charAt(0);
// console.log(first1);
// console.log(first2);

// task 3
// let str3 = "Hello Javascript";
// let indexJ = str3.indexOf("J"); // Знаходження індексу 'J'
// let symbolJ = str3.charAt(indexJ); // Або str3[indexJ] для отримання 'J'

// console.log(symbolJ); // Виводить 'J'

//  task 4
// console.log(str3[str3.length -1]);
// console.log(str3.charAt(str3.length -1));

//task 5
// function lastChar (str) {
//     return str[str.length -1];
// }
// function lastCharV2 (str) {
//     return str.charAt(str.length -1);
// }
// function lastCharV3(str) {
//     return str.slice(-1); 
//   }

  // task 6
//   let a = 'When candles are out,';
//   let b = 'all cats are grey.';
//   console.log (a.concat(" ",b))

// task 7
  let fact = "Fifteen is the same as";
  let a = 5;
  let b = 10;

fact = `${fact} ${a + b}`;
console.log(fact);


// task 8
let firstName = "Tom";
let lastName = "Cat";
function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName(firstName, lastName));

//task 9
function greeting(firstName, lastName) {
    const fullName = getFullName(firstName, lastName);
    return `Hello, ${fullName}!`;
}
  
console.log(greeting(firstName, lastName));

// task 10
function createGreeting(firstName, lastName) {
    const greetingText = greeting(firstName, lastName);
    return `<div><h1>${greetingText}</h1></div>`;
}
  
console.log(createGreeting("Tom", "Cat"));

// task 11
let string1 = "  The name of our game  ";
console.log (string1.trim());// "The name of our game"
console.log (string1.trimStart());// "The name of our game  "
console.log (string1.trimEnd());// "  The name of our game"

const phoneNumber = '\t  555-123\n ';

const result1 = phoneNumber.replace(/^\s+|\s+$/g, '');
console.log(result1); // => '555-123'

const result2 = phoneNumber.replace(/^\s+/, '');
console.log(result2); // => '555-123 \n'

// task 12
// let sentence = 'Always look on the bright side of life';
// let passcode = 'look up';
// let passcode2 = 'look on';

// const findme = `8sowl0xebaconxjwo98w`;

// const found = sentence.includes(passcode);
// const found2 = sentence.includes(passcode2);
// console.log(found); //повертає false
// console.log(found2);//повертає true

// let firstWorld = sentence.indexOf('look on', 8);
// console.log(firstWorld);//повертає -1

// task 13
// let sentence = 'Always look on the bright side of life';
// let firstd = sentence.indexOf('l');// Знайти індекс символу 'l'
// console.log(firstd);//повертає 1
// let first2 = sentence.indexOf('l', 3);// Знайти індекс символу 'l', починаючи з 3-ї позиції
// console.log(first2);//повертає 7
// let first3 = sentence.indexOf('L');// Знайти індекс символу 'L'
// console.log(first3);//повертає -1

//task 14
// let sentence = 'Always look on the bright side of life';
// let myNewStr = sentence.substring(7);
// console.log(myNewStr);// Отримати підрядок 'look on the bright side of life'
// let myNewStr2 = sentence.substring(0,6);
// console.log(myNewStr2);// Отримати підрядок 'Always'
// let myNewStr3 = sentence.substring(7,11 );
// console.log(myNewStr3);// Отримати підрядок 'look'

// task 15
const nameRegex = /^[a-z0-9_-]{8,16}$/;

// task 16
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//task 17
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

const myNewStr = sentence.substring(0, 50);
console.log(myNewStr)
const myNewStr2 = sentence.substr(0, 50);
console.log(myNewStr2); 

