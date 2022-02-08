// var a = parseInt(prompt("first number : "));
// var b = parseInt(prompt("second number : "));

// var sum = 0;

// for (var i = a; i <= b; i = i + 1) {
//   sum = sum + i;
// }
// document.write(`<h1>${sum}</h1>`);

// for (var i = 0; i <= 3; i++) {
//   var number1 = parseInt(prompt("enter your first number : "));
//   var number2 = parseInt(prompt("enter your second number : "));
//   var total = number1 + number2;
//   console.log("total  " + total);
// }
// var number = parseInt(prompt("enter your first number : "));
// var limit = parseInt(prompt("enter your first number : "));

// var sum = 0;
// for (var i = number; i <= limit; i++) {
//   sum = sum + i;
//   document.write(`<h1>${sum}<h1>`);
// }
// var i = 10;
// var sum = 0;
// while (i <= 100) {
//   sum = sum + i;
//   i = i + 1;
// }
// document.write(`<h1>${sum}</h1>`);

// var number = parseInt(prompt("enter your first number : "));
// var limit = parseInt(prompt("enter your limit number : "));
// var i = number;
// var sum = 0;
// while (i <= limit) {
//   sum = sum + i;
//   i++;
// }
// document.write(`<h1>${sum}</h1>`);

// var i = 0;
// var sum = 0;
// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(`<h1> ${i} </h1>`);
//     sum = sum + i;
//   }
//   i++;
// }

// document.write(`<h1>${sum}</h1>`);

// var i = 0;
// var sum = 0;

// while (i <= 999) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(`<h1>vag shesh -> ${i} </h1>`);
//     sum = sum + i;
//   }
//   i++;
// }
// document.write(`<h1>${sum}</h1>`);

// var i = 0;
// while (i <= 10) {
//   document.write(`<h1>${i}</h1>`);
//   i++;
// }
///the main different is between do while and while loop -> while loop er condition age check kore then kaj korre  ar do while loop shobar sheshe kaj kore
// var i = 0;
// do {
//   document.write(`<h1>${i}</h1>`);
//   i++;
// } while (i <= 10);

/// break and continue
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   document.write(`<h1>${sum}</h1>`);
// }
// for (var i = 0; i <= 100; i++) {
//   if (i == 10) {
//     break;
//   }
//   document.write(`<h1>${i}</h1>`);
// }
// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   sum = i + sum;
//   document.write(`<h1>${sum}</h1>`);
// }

// ternary operators
// var number = Number(prompt(" number : "));

// if (number > 0) {
//   document.write("positive");
// } else if (number < 0) {
//   document.write("negative");
// } else {
//   document.write("Zero");
// }

// var checkRightNumber = number > 0 ? "positive" : "negative";
// document.write(checkRightNumber);
// var i = Number(prompt("number1 : "));
// var i2 = Number(prompt("number2 : "));
// var i3 = Number(prompt("number3 : "));

// var biggerNumber =
//   i > i2 && i > i3
//     ? `${i} bigger`
//     : i2 > i && i2 > i3
//     ? `${i2} bigger`
//     : `${i3} bigger`;
// document.write(biggerNumber);

//// learning function again

// function myFunction(a, b) {
//   return a + b; /// without return function never workable
// }

// const myFunc = myFunction(10, 12);

// document.write(`${myFunc}`);

// function consonantNumber(a, b) {
//   const consonant = a - b;
//   return consonant;
// }
// const number = consonantNumber(20, 10);
// document.write(`consonant ${number}`);

// function func(num1, num2) {
//   let gun = num1 * num2;
//   document.write(`<h1>${gun}</h1>`);
// }

// func(10, 20);
// func(20, 30);
// func(40, 50);
// func(60, 50);

// var a = Number(prompt("number1 : "));
// var b = Number(prompt("number2 : "));

// (function sum() {
//   var total = a + b;
//   document.write(`total ${total}`);
// })(a, b);

// var messageOfUser = function message(sms) {
//   document.write(`<h1>${sms}</h1>`);
// };

// messageOfUser("hello world");
// messageOfUser("hey buddy");
// messageOfUser("hey are you listen");
// messageOfUser("i love u");

// var a = Number(prompt("number1 : "));
// var b = Number(prompt("number2 : "));

// (function totalNumber() {
//   var sum = a * b;
//   document.write(`<h1>total - ${sum}</h1>`);
// })(a, b);

// var namesOne = ["riaz", "omi", "sakib", "abir"];
// var namesTwo = ["sama", "arohi", "afia", "nishat"];
// var names = namesOne.concat(namesTwo);
// names.push("n ", "sokina");
// document.write(`<h1>names - ${names}</h1>`);

// var names = new Array();
// for (let i = 0; i < 5; i++) {
//   names[i] = Number(prompt("number : "));
// }

// let element = 0;
// for (let i = 0; i < names.length; i++) {
//   element = element + Number(names[i]);
//   document.write(`<h1>total ${element}</h1>`);
// }

// var numbers = new Array();
// for (let i = 0; i < 5; i++) {
//   numbers[i] = parseInt(prompt("number : "));
// }
// ///
// let element = 0;
// for (let i = 0; i < numbers.length; i++) {
//   element = element + numbers[i];
//   document.write(`<h1>total - ${n}</h1>`);
// }

// const names = ["riaz", "nafim", "ashik", "sakib", "tamkin"];
// names.splice(1, 2, "ALi");
// var sort = names.sort();
// document.write(`<h1> ${sort}</h1>`);

// const myArray = [18, 77, 81, 78, 101, 11];
// myArray.sort(function (a, b) {
//   return b - a;
// });
// document.write(`<h1>my array ${myArray}</h1>`);

// myArray.sort(function (a, b) {
//   return b - a;
// });
// document.write(`<h1>my array ${myArray}</h1>`);

// function highestScore(score) {
//   let max = score[0];
//   for (let index = 1; index < score.length; index++) {
//     if (max < score[index]) {
//       max = score[index];
//     }
//   }
//   return max;
// }
// let score = [18, 77, 81, 78, 101, 11];
// var x = highestScore(score);
//

// function highestScores(score) {
//   let max = score[0];
//   for (let index = 0; index < score.length; index++) {
//     if (max < score[index]) {
//       max = score[index];
//     }
//   }
//   return max;
// }
// let score = [18, 77, 81, 78, 101, 11];
// let highestScore = highestScores(score);
// document.write(`<h1>highestScore ${highestScore}</h1>`);

// function highestName(score) {
//   let name = score[0];
//   for (let index = 0; index < score.length; index++) {
//     let names = score[index];
//     console.log(names.length);
//     if (name.length < names.length) {
//       name = names;
//     }
//   }
//   return name;
// }
// let score = ["riaz", "jahid hasan", "alamgir", "sakib", "x", "y"];
// let namesScore = highestName(score);
// document.write(`<h1>highestScoreName ${namesScore}</h1>`);

// function highestRunScorer(playerInfo) {
//   var highestScorer = playerInfo[0][0];
//   var highestScore = playerInfo[0][1];
//   for (let index = 1; index < playerInfo.length; index++) {
//     if (highestScore < playerInfo[index][1]) {
//       highestScore = playerInfo[index][1];
//       highestScorer = playerInfo[index][0];
//     }
//   }
//   return highestScorer;
// }

// function highestLength(playerInfo) {
//   var highestScorer = playerInfo[0][0];
//   var highestScore = playerInfo[0][1];
//   for (let index = 1; index < playerInfo.length; index++) {
//     if (highestScore < playerInfo[index][1]) {
//       highestScore = playerInfo[0][1];
//       highestScorer = playerInfo[index][0];
//     }
//   }
//   return highestScorer;
// }

// const playerInfo = [
//   ["riaz", 4500000],
//   ["jahid", 5000000],
//   ["zahidaaa", 1],
//   ["rahid", 6000000000000],
//   ["rahi", 7000000000000],
// ];
// var namesScore = highestLength(playerInfo);
// document.write(`<h1>highest Score Name ${namesScore}</h1>`);

// function studentInformation(name, age, language) {
//   this.name = name;
//   this.age = age;
//   this.language = language;

//   this.display = function () {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.language);
//   };
// }

// var studentOne = new studentInformation("riaz", 22, [
//   "english",
//   "bangeli",
//   "urdu",
// ]);
// var studentTwo = new studentInformation("riaz", 22, [
//   "english",
//   "bangeli",
//   "urdu",
// ]);
// var studentThree = new studentInformation("riaz", 22, [
//   "english",
//   "bangeli",
//   "urdu",
// ]);

// studentOne.display();
// studentTwo.display();
// studentThree.display();

// function studentsInformation(name, age, lan) {
//   this.name = name;
//   this.age = age;
//   this.lan = lan;
//   this.display = function () {
//     document.write(this.name);
//     document.write(this.age);
//     document.write(`<h1>${this.lan}</h1>`);
//   };
// }

// var s1 = new studentsInformation("riaz", 45, ["x", "y", "z"]);
// var s2 = new studentsInformation("nafim", 45, ["x", "y", "z"]);
// var s3 = new studentsInformation("nafi", 45, ["x", "y", "z"]);

// s1.display();
// s2.display();
// s3.display();

///////////////////////////////////////////// <=========> ////////////////////////////////
// let youLost = 0;
// let youWin = 0;
// for (let index = 1; index <= 5; index++) {
//   const guessNumber = Number(prompt("enter any number 5 times from 1 to 5:"));
//   const randomNumber = Math.floor(Math.random() * 5) + 1;
//   if (guessNumber === randomNumber) {
//     console.log("you are win");
//     youWin++;
//   } else {
//     console.log("you are lost");
//     youLost++;
//   }
// }

// document.write(`<h3 class='win'>You are win in ${youWin} times</h3>`);
// document.write(`<h3 class='lost'>You are lost in ${youLost} times</h3>`);

// =================
// let youLost = 0;
// let youWin = 0;

// for (let index = 1; index <= 5; index++) {
//   const guessNumber = Number(prompt("enter any number 5 times from 1 to 5:"));
//   const randomNumber = Math.floor(Math.random() * 5) + 1;
//   if (guessNumber === randomNumber) {
//     youWin++;
//     console.log(`you are win in ${randomNumber} times`);
//   } else {
//     youLost++;
//     console.log(`you are lost in ${randomNumber} times`);
//   }
// }
// document.write(`you are win in ${youWin} times`);

// document.write(`you are lost in ${youLost} times`);

// let save = document.querySelector(".save");
// let message = document.querySelector(".message");
// save.addEventListener("click", saveFunction);

// function saveFunction() {
//   message.textContent = "hey how are you";
//   setTimeout(() => {
//     message.textContent = "";
//   }, 3000);
// }

// let save = document.querySelector(".save");
// let messageLenth = document.querySelector(".message");

// save.addEventListener("click", count);

// function count() {
//   let count = 1;
//   messageLenth.textContent = count;
//   setInterval(() => {
//     messageLenth.textContent = count;
//     count++;
//   }, 4000);
// }

// const btn = document.querySelector(".save");
// const save = document.querySelector(".message");
// btn.addEventListener("click", savedButton);
// function savedButton() {
//   save.textContent = "hello rafsan";
//   setTimeout(() => {
//     save.textContent = "";
//   }, 5000);
// }
// setInterval(lenth, 1000);
// function lenth() {
//   document.write(`<h1>hey riaz how are you !</h1>`);
// }

// const saveBtn = document.querySelector(".save");
// const message = document.querySelector(".message");
// const message2 = document.querySelector(".message2");
// saveBtn.addEventListener("click", saved);
// function saved() {
//   message.innerHTML = "hello world";
//   setTimeout(() => {
//     message.innerHTML = "";
//   }, 3000);

//   setInterval(() => {
//     var x = (message2.innerHTML = "hello lorem  ");
//     document.write(`<span class='red'>Hello world</span> `);
//   }, 1000);
// }

// saveBtn.addEventListener("click", myClock);
// function myClock() {
//   let date = new Date();
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let minutes = timeManagement(minute);
//   console.log(minutes);
//   let second = date.getSeconds();
//   let seconds = timeManagement(second);
//   console.log(seconds);
//   let time = hour + ":" + minutes + ":" + seconds;
//   console.log(time);
//   message.textContent = time;
//   setInterval(myClock, 1000);
// }

// function timeManagement(value) {
//   if (value < 10) {
//     console.log(value);
//   }
//   return value;
// }

// //// default and rest parameter

// "use strict";

// function printNumber(x, y, ...z) {
//   var x = [x, y, ...z];
//   console.log(x, y, ...z);
// }

// printNumber("riaz", "efti", "nafi", "maruf", "jabed");

// function numberTotal(x, y, ...z) {
//   console.log(x, y, ...z);
// }
// numberTotal(10, 12, 14, 66, 88, 90, 23, 111);

// const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const number2 = [11, 23, 31, 41, 55, 61, 72, 81, 93];
// const number3 = [111111, 333, 4444, 677, 55, 90858];
// const total = [...number1, ...number2, ...number3];
// document.write("total ", total);

// const objectLiteral = {
//   name: "javascript",
//   js() {
//     return "js is one of the best premium language ever";
//   },
// };

// document.write(objectLiteral["js"](), " " + objectLiteral.name);

// const names = ["riaz", "efti", "nafi", "maruf", "jabed"];
// for (const name of names) {
//   console.log(name);
// }

// const xS = {
//   name: "riaz",
//   age: 22,
//   point: 3.32,
// };

// for (const x in xS) {
//   console.log(x, ":", xS[x]);
// }

///forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((number, index, array) => {
//   array[index] = number + 1000;
// });
// console.log(numbers);
// const names = ["riaz", "efti", "nafi", "maruf", "jabed"];
// let x = names.filter((filterNUmber) => {
//   return filterNUmber.length > 4;
// });

// console.log(x);

// const studentInformation = [
//   { name: "riaz", age: 19, CGPA: 3.34 },
//   { name: "sakib", age: 20, CGPA: 3.54 },
//   { name: "akram", age: 21, CGPA: 3.58 },
//   { name: "umar", age: 23, CGPA: 4 },
// ];

// const students = () => {
//   return studentInformation
//     .filter((student) => student.CGPA > 3.58)
//     .map((ages) => ages.age);
// };

// console.log(students());

// const numbers = [1, 3, 77, 88, 21, 72];

// const number = () => {
//   var num = numbers.findIndex((nm) => nm % 2 === 0);
//   if (num % 2 === 0) {
//     console.log("your result is correct");
//   } else {
//     console.log("sorry");
//   }
//   return num;
// };

// console.log(number());

const studentInformation = [
  {
    name: "samiya sama",
    age: 18,
    studyIn: "CSE",
    sccPoint: 4.59,
  },
  {
    name: "sakib",
    age: 19,
    studyIn: "CSE",
    sccPoint: 4.54,
  },
  {
    name: "abir",
    age: 17,
    studyIn: "CSE",
    sccPoint: 4.52,
  },
];
const NeedGradePoint = () => {
  const names = studentInformation.find((student) => student.name.length > 7);
  return names.name;
};

document.write(`<h1>top result of ${NeedGradePoint()}</h1>`);
