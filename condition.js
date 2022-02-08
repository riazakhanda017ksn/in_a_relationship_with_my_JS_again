let LANGUAGE = "JAVA";
let language = "javascript";

function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`i have a lots of passion on condition ${getLanguage()}`);

///hosting in function
hostingInFunction(); //it will be workable

function hostingInFunction() {
  ///function is also working like variable
  console.log("hosting is working");
}

// hostingInFunction()  //it will be workable

// others rules
// hostingInFunctionTwo(); /// it will not work because it define by const variable thats it block scope
const hostingInFunctionTwo = function () {
  ///function is also working like variable
  console.log("workable");
};
hostingInFunctionTwo(); //it will work here

///// anisul is condition

var conditionRating = 5;
var conditionRating2 = 5;
var rating = "this rating is absolutely right";

if (conditionRating + conditionRating2 === 10) {
  console.log("this rating is true");
} else {
  console.log("this rating is false");
}

if (rating.length <= 30) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

var numberForCondition = 6;

if (numberForCondition > 0) {
  console.log("this is bigger then 0");
} else if (numberForCondition < 0) {
  console.log("this condition less then 0");
} else {
  console.log("condition ==== condition =true");
}

///// student result

// var num = prompt("enter a number : ");
// if (num > 100 || num < 0) {
//   console.log("invilid number");
// } else if ((num >= 80) & (num <= 100)) {
//   console.log("you get A+");
// } else if (num >= 70 && num <= 79) {
//   console.log("you get A");
// } else if (num >= 60 && num <= 69) {
//   console.log("A-");
// } else if (num >= 40 && num <= 59) {
//   console.log("passed");
// } else if (num >= 33 && num <= 69) {
//   console.log("passed korso");
// } else if (num >= 20 && num <= 32) {
//   console.log("fail");
// } else {
//   console.log("valo kore poro");
// }

// var firstNumber = prompt("first number : ");
// var secondNumber = prompt("Second number: ");
// var thirdNumber = prompt("third number: ");

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log(`${firstNumber} is bigger`);
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//   console.log(`${secondNumber} is bigger`);
// } else {
//   console.log(`${thirdNumber} is bigger`);
// }

// var checkVowel = prompt("word : ");

// if (
//   checkVowel == "a" ||
//   checkVowel == "A" ||
//   checkVowel == "e" ||
//   checkVowel == "E" ||
//   checkVowel == "i" ||
//   checkVowel == "I" ||
//   checkVowel == "u" ||
//   checkVowel == "U"
// ) {
//   console.log("your vowel is correct");
// } else {
//   console.log("its a consonant");
// }

// checkVowel = checkVowel.toLowerCase();

// if (
//   checkVowel == "a" ||
//   checkVowel == "e" ||
//   checkVowel == "i" ||
//   checkVowel == "u"
// ) {
//   console.log("your vowel is correct");
// } else {
//   console.log("its a consonant");
// }

// var mark = prompt("your result : ");

// if (mark > 100 || mark < 0) {
//   console.log("your result is wrong");
// } else if (mark >= 80 && mark <= 100) {
//   console.log("A+");
// } else if (mark >= 70 && mark <= 79) {
//   console.log("A");
// } else if (mark >= 60 && mark <= 59) {
//   console.log("-A");
// } else if (mark >= 50 && mark <= 59) {
//   console.log("B");
// } else if (mark >= 33 && mark <= 49) {
//   console.log("c");
// } else {
//   console.log("tmi fail korso valo kore poro");
// }

// var firstNumber = prompt("first number : ");
// var secondNumber = prompt("second number: ");
// var thirdNumber = prompt("third number: ");

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log(`${firstNumber} is bigger`);
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//   console.log(`${secondNumber} is bigger`);
// } else {
//   console.log(`${thirdNumber} is bigger`);
// }

// play with digit

// var digit = prompt("digit : ");

// if (digit == 0) {
//   console.log("Zero");
// } else if (digit == 1) {
//   console.log("One");
// } else if (digit == 2) {
//   console.log("Two");
// } else if (digit == 3) {
//   console.log("three");
// } else if (digit == 4) {
//   console.log("Four");
// } else if (digit == 5) {
//   console.log("Five");
// } else if (digit == 6) {
//   console.log("Six");
// } else if (digit == 7) {
//   console.log("Seven");
// } else if (digit == 8) {
//   console.log("eight");
// } else if (digit == 9) {
//   console.log("nine");
// } else if (digit == 10) {
//   console.log("ten");
// } else {
//   console.log("not a digit");
// }

// var digit = prompt("digit : ");

// switch (digit) {
//   case "0":
//     console.log("Zero");
//     break;
//   case "1":
//     console.log("one");
//     break;
//   case "2":
//     console.log("two");
//     break;
//   case "3":
//     console.log("three");
//     break;
//   case "4":
//     console.log("four");
//     break;
//   case "5":
//     console.log("five");
//     break;
//   case "6":
//     console.log("six");
//     break;
//   case "7":
//     console.log("seven");
//     break;
//   case "8":
//     console.log("eight");
//     break;
//   case "9":
//     console.log("nine");
//     break;

//   default:
//     console.log("an error happen");
//     break;
// }

var vowel = prompt("vowel : ");

vowel = vowel.toLowerCase();

// switch (vowel) {
//   case "a" || "i" || "e" || "u":
//     console.log(`${vowel} is vowel`);
//     break;
//   default:
//     console.log("it was consonant");
//     break;
// }
switch (vowel) {
  case "a":
  case "i":
  case "e":
  case "u":
    console.log(`${vowel} is vowel`);
    break;
  default:
    console.log("it was consonant");
    break;
}
