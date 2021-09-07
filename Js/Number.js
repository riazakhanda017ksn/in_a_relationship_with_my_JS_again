// =====================>javascript number format ==================>

// this is decimal format
let numberOne = 3.12; ///this is decimal formating
// integer number
let numberTwo = 12; // integer number (purno shongkhake iteger number bole)
///
///
//Integer___Number(purno shongkkha)
/*
javascript numbers can read  without (notation,period or exponent notation)  upto 15 digits.
//
orthat javascript er khetre purno shonkkha 15 porjonto read korte pare.
er pore shey ulta palta count kore.
*/
let integerNumber = 999999999999999; // it will be return 999999999999999 because it has digits upto 15.
let decimalNumber = 9999999999999999; /*it will return 10000000000000000 because it has lots of digit 
than \15
*/

////how can we remove unnessary number from our total count
let decimalOne = 0.3;
let decimalTwo = 0.6;
let realNumber = 10;
let decimalThree = 0.1;

console.log(
  "get result",
  (decimalOne * decimalTwo + realNumber * decimalThree) / 10
); ///the result will get out => 0.118

//  ==========>remember about decimal number  of (decimal) Precision  ================>
//DECIMAL NUMBER CALLED => PRECISION NUMBER
/*{
 decimal number always returns with 17 counts ;
 /
 mane decimal shongkkha shorboccho 17 digit return korbe //
 ar dui ti shongkkhar jogfol shob shomoy 17 digit number je 
 return korbe ata kokhono e asha kora jay na

 example : let x = 0.2 + 0.1; // x will be 0.30000000000000004

 note: decimal number shorboccho 17 digit dekhate pare
}*/

///string vs number
let n = 6;
let nTwo = 7;

let sentence = "this is string" + " " + +n + nTwo;
console.log(
  sentence
); /*it will return 'this is string 67' ; it cant calculate number when it is 
start with 'string' and then it has number then it cant calculate; remember this/
when i use number at the first it will count then it result comeOut with => this is string 13
*/

// ===============> javascript counting ==============>

/*
{
    1: jog korar khetre string er sathe string jog kora jay na, jokhon string er moddhe number thake
    2: string moddhe number thakle seta biog kora jay.
    3:  string moddhe number thakle seta gun kora jay.
    4:  string moddhe number thakle seta vag kora jay.
}
*/

// =>jog
let numOne = "5";
let numTwo = "7";
console.log(numOne + numTwo); /// it can't count because of the number of into in string

//others
let c = 9;
let e = 9;
let f = "20";
console.log(c + e + f); ///it cant calculate the string with number for that this result is => 1820

// =====> important rules for the calculate number =====>
let stringName = "lorem";
let numbersOfTwenty = 20;

console.log(numbersOfTwenty / stringName); ///it will return NaN

////which number is Numeric Strings

// Numerics String is '12','13' mane jei sokol string er majhe number thake take Numeric Strings

///=============> JavaScript Numbers are Always 64-bit Floating Point

// ==========================> about NaN=====================>

// is NaN a number ?
// Answer: NaN is a number not a legal number => typeof NaN it will return Number
///Note: NaN is numeric type

///javascript has a isNaN() function

// example=>

let isNaNOne = "2";
let isNaNTwo = 3;

console.log(isNaN(isNaNOne)); //it will return 'false' because it is not a string
console.log(isNaN(isNaNTwo)); //it will return 'false' because it is not a string

// let Nan = NaN;
// let neoMericString = "6";

// console.log(Nan + neoMericString);///it returns NaN6
let Nan = NaN;
let neoMericString = 6;

console.log(Nan + neoMericString); ///it returns NaN]

///====================infinity ================>

/*1:what is Infinity of Javascript Number typeof ?
answer: Number*/

// example of infinity
// let infinity = 2;
// console.log(infinity / 0); ///returns infinity mane oshim
let infinity = -2;
console.log(infinity / 0); ///returns -infinity mane oshim

////////===========Hexadecimal============>
let hexaDecimal = 0xab;
console.log(hexaDecimal); ///it will return 171

// ====================> Number into Array===============>

let anotherNumber = 9;

let makeArray = 9;
let makeNumberIntoArray = new Number(makeArray);
console.log(makeNumberIntoArray); ///it will returns Number{9}
console.log(anotherNumber == makeNumberIntoArray); /*it will returns true but
 if i changed the value => it return false ! because == just check the value rather its
 not show the type*/
console.log(
  anotherNumber === makeNumberIntoArray
); /*it will return false because '==='
 checks value also check the type */
/* ========== > Compare with Number Object 'Number {} it will show false , 
because array never be equal==========>*/

let ObjectNumberOne = new Number(4);
let ObjectNumberTwo = new Number(4);

console.log(
  ObjectNumberOne === ObjectNumberTwo
); /*it return false because javascript object 
never equal remember it */

////NOTE: Object cant be compared

/// EXERCISE___________________>

// let xn = "5";
// let yn = 2;
// const textOfNumber = `Five + two = ${xn + yn} But Five - two = ${xn - yn}`;

// console.log(textOfNumber);

let word = "b" + "a" + "a" + "a";
console.log(word.toUpperCase());

// <======================> JS Number method <================>

/*
1: string and number are literal value
*/

//================>// make number into a  'string'

let numbersOfData = 647;
let toStringMake = numbersOfData.toString();
console.log(typeof toStringMake); ///it makes the number into string

// ===================>The toExponential() Method================>

let wantToScoreNumber = 9.744647;

// let getNumber = wantToScoreNumber.toExponential(2); ///returns 9.74e+0 to become a String
// let getNumber = wantToScoreNumber.toExponential(4); ///returns 9.7446e+0 to become a String
let getNumber = wantToScoreNumber.toExponential(6); ///returns 9.744647e+0 to become a String
console.log(getNumber);

// ======================================> toFixed=====================>

let minusTheCount = 9.5885;
console.log(minusTheCount.toFixed(2));

///toFixed perfect for working with money

// =============================> The toPrecision() Method =============>
let The_toPrecision = 9.656;
console.log(The_toPrecision.toPrecision(2));

// -------------------------------------The valueOf() Method======================
/*
1: the value of number always returns number
There is no reason to use it in your code.
because all javascript data type has value of and a toString() method
*/

let xxx = 6773;
console.log(xxx.valueOf()); //it always returns numbers

// ====================Converting Variables to Numbers=====================>
/*
There are three global number method but these are not number method
1:Number      //its returns a number ,converted from its arguments
2:parseFloat  //parsesFloat  parses its arguments and returns a floating number
3:parseInt    // parses its arguments into a integer number
*/

////////////////////////=>The Number method<=/////////////////////////

let NumberMethod = "53463";
console.log(Number(NumberMethod)); //its returns

/////

console.log(Number(true)); // its returns 1
console.log(Number(false)); // its returns 0
console.log(Number("10,33")); // its returns NaN
console.log(Number("10 33")); // its returns NaN
console.log(Number("john")); // its returns NaN

// ===============The Number() Method Used on Dates///=============>
console.log(Number(new Date("1970-01-01"))); ///its returns and its the typeof number

// ==================>ParseInt==============>

/*
1.parseInt make a number into integer.
/// space is allowed 
*/

console.log(parseInt("-10"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10.33"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10")); /// it will returns NaN because the count start from the left side
//and the left side value is string.it cant be make a number

// =================> parseFloat ===========>
/*parseFloat is almost similar like parseFloat 
but one different is parse float never make a number into integer */

console.log(parseFloat("10.33")); /// its make into number but also it is decimal number

console.log(parseFloat("ten 10")); /// it will returns  NaN

////Note:if the number cant be convert then it will show // NaN

// =============>JavaScript MIN_VALUE and MAX_VALUE============>

let maxValueOne = Number.MAX_VALUE;
let maxValue = Number.MIN_VALUE;

console.log(maxValueOne, maxValue);

// =====================>POSITIVE_INFINITY===============
let xg = Number.POSITIVE_INFINITY;
console.log(xg); ///its return infinity

// =====================>Negative_INFINITY===============
let inifinity = -1 / 0;
console.log(xg); ///i

//////question number method ==================>
/*
i:isInfinite()
ii:isInteger()
iii:isNaN()
iv: isSafeInteger()()
*/
