// ----------------------------------What is Array ? ------------------------------------
// answer:An array is special variable,which can help hold data one more than

//////literal syntax array

const array = ["asif", "alex", "mitu"]; ///its called literal syntax
function anyNames() {
  document.getElementById("demo").innerHTML = array;
}
// ================using new keyword we can make an array======>

const makeArrayByNewKeyword = new Array("saka", "alex", "john doe");
console.log(makeArrayByNewKeyword);

//note: but we should not use the new keyword

// ================================>Array types=========================>
/*
in javascript array is object type..array is also like object

remember  that array are a special type of object
*/
//example=>
const namesOfStudents = ["alex", "john", "nafim"];
console.log(typeof namesOfStudents); //it returns type => object

// >---------------------------Changing an Array Element---------------------------<

const theListsOfFruits = ["banana", "mango", "water melon", "apple"];

theListsOfFruits[4] = "orange";
theListsOfFruits[5] = "potato";
theListsOfFruits[6] = "pineapples";
theListsOfFruits[7] = "pineapples";
theListsOfFruits[0] = "stobery";

console.log(theListsOfFruits);

// how can i get last value of the array

console.log(theListsOfFruits[theListsOfFruits.length - 1]); ///it will returns pineapples

// =====================>Looping Array Elements=================>
const writeAnArray = ["1", "2", "3", "4", "5"];
let length = writeAnArray.length;

for (i = 0; i < length; i++) {
  console.log(writeAnArray[i]);
  console.log([i]);
}

let textForDisplayView = "<ul>";

for (i = 0; i < length; i++) {
  textForDisplayView += "<li>" + writeAnArray[i] + "</li>";
}
textForDisplayView += "</ul>";

function numberCounts() {
  document.getElementById("numbers").innerHTML = textForDisplayView;
}

///for array = forEach is much better

const fruitsNames = ["banana", "apple", "orange", "water melon"];
//we can add new value on the array using 'push' method
fruitsNames.push("lemon");
//we can also add a new element on the array using 'length' method
fruitsNames[fruitsNames.length] = "mango";
let displayView = "<ul>";
fruitsNames.forEach(myFruitsFunction);
displayView += "</ul>";
//
function clickOn() {
  document.getElementById("fruits").innerHTML = displayView;
}
function myFruitsFunction(value) {
  displayView += "<li>" + value + "</li>";
}

//node:adding new element with high index can create 'undefine' 'holes' in an array =======>
const fruitsItems = ["Banana", "Orange", "Apple"];
fruitsItems[6] = "lemon"; ///create undefine hole in fruits
// if access like =>
fruitsItems[3]; //it will show undefine

// Note: never apply like dis..

//<==============================================> Associative Arrays <==================================================>
const personIntroduce = [];

personIntroduce[0] = "mr akhanda";
personIntroduce[1] = 43;
personIntroduce[2] = "engineer";
personIntroduce[3] = "in dhaka";

console.log(personIntroduce);

// --------------------------------------------------------->warning------------------------------------------------------------------>
/*
never use the named index in array it will redefine the array into object,
after that some array methods and properties will produce incorrect result

=> here the example
*/

const sakibIntroduce = [];

//
sakibIntroduce["Name"] = "Sakib ahmed";
sakibIntroduce["age"] = "21";
sakibIntroduce["work at "] = "software engineer";

console.log(sakibIntroduce); ///it will returns an array , its array but mainly it's a object
console.log(sakibIntroduce["Name"]);
console.log(sakibIntroduce.length); //it will returns 0 //because array can counts only numbers but never counts the namesIndex
console.log(sakibIntroduce[0]); //it will show 'undefine'

////////////////////////===========================>The Difference Between Arrays and Objects===================================>

/*the different between array and object=>
in javascript =>
1:array use numbered indexes and also javascript has the length of the value
2:object use named indexes 
*/
//remember that => arrays are special kinds of objects,with the numbers indexes.

// ------------------------------------>When to Use Arrays. When to use Objects.------------------------------------->
/*
When to Use Arrays. When to use Objects =>
*javascript does not support the associative 
* you should use the object when you want the element names to be 'String'(text)
* you should use the array when you want the element names to be 'Numbers'(number)
*/

// ----------------------------------------------------------------->Javascript new array------------------------------------------------>

const makeArrayByParenThese = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(makeArrayByParenThese); ///it will returns array

//remember that you should not use this system because its make the code slower but can use this '[]' array.it will be much better for your code

// =================>A Common Error=================>
const points = [40]; ///the result [40] but its never show the length of the array

const pointsOfArray = new Array(40); ///it will show  [empty × 40] with length of the (40)

// ==============================How to Recognize an Array===============================

/*
a common question that 
 how can i know that if a variable is an array?
answer: the answer is when i use 'typeOf then it will return "object"'

remember that javascript array is an object
*/

// ======================>isArray method==================>
/*
javascript has the 'isArray()' method 

=> there is a example =========>
*/
// const IsArray = [40];
// console.log(Array.isArray(IsArray)); ///it will returns 'true'

// =====================> the second solution to find an array by using instanceof================>

const IsArray = [40];
console.log(IsArray instanceof Array); ///also it will returns 'true'

// ========================>important rules=========================>

/*
javascript does not support the associative array but it will returns it with object
*/

// =====================================>Javascript Array Method ===============================>

// --------------------------------------------Converting Arrays to Strings----------------------->
const myFruits = ["Banana", "Orange", "Apple", "Mango"];
function nameShow() {
  document.getElementById("fruit").innerHTML = myFruits.toString();
}

function comma() {
  document.getElementById("comma").innerHTML = myFruits.join(";");
}
// =========================>Popping and Pushing<==========================

/*
1:popping -> using 'pop' we can remove the last element from the array 
2: pushing -> using 'push' we can add a new element in the array of first
*/

//push->

const pushingElement = ["Orange", "Apple", "Mango"];
document.getElementById("myArray").innerHTML = pushingElement;
function pushX() {
  pushingElement.push((pushingElement[1] = "banana"));
  document.getElementById("myArray").innerHTML = pushingElement;
}

function pop() {
  pushingElement.pop();
  document.getElementById("pop").innerHTML = pushingElement;
}

// =========================>Shifting and unShift Elements<==========================
/*
1: the main fundamental work is the remove the first array element

*/

// -> Shift()
const shiftElement = ["banana", "Orange", "Apple", "Mango"];
document.getElementById("shift").innerHTML = shiftElement;

function shift() {
  shiftElement.shift();
  document.getElementById("shift").innerHTML = shiftElement;
}

//-> unShift
/*
1: the main fundamental matter is unshift add element on the position of[0]
mane 'unshift' er kaj hocche shamne element add kora
*/

// -> Unshift Example

function unShift() {
  shiftElement.unshift("water melon");
  document.getElementById("shift").innerHTML = shiftElement;
}

// Changing Elements================================>Changing Elements

function changingElement() {
  shiftElement[shiftElement.length] = "jackfruit";
  document.getElementById("shift").innerHTML = shiftElement;
}

// ==================>Delete method=============>
function deleteElement() {
  delete shiftElement[2];
  document.getElementById("shift").innerHTML = shiftElement;
}

//note_Down that:never use delete because it remove the element but the element of the array seems undefine
/*
mane hocche je amr delete method ta use na kore amra amra 'shift' ba 'pop' use kora tah better cz
delete remove kore element but array moddhe ta undefine hishabe thake.
*/

// ===============================>Splicing an Array=====================>

/*
Splicing array added the many elements if i want
for that i have to do three thing , that is :
example.splice(2,0,'a','b' )
ekhane ->
2,0 hocche ami koto number theke element dibo..dhorlam 2 theke ar koto ta element katbo ta
0 diye nirdesh deoa hoyeche 
/
jodi ami 0 er jayga 2 lekhtam tahole tar dan dik theke 2 ta element remove korto ata e main concept
*/

function Splicing() {
  shiftElement.splice(1, 0, "stoberry", "apple,mango,jack-fruits");
  document.getElementById("shift").innerHTML = shiftElement;
}
////remove and add
function SplicingOf() {
  shiftElement.splice(1, 2, "stoberry", "apple,mango,jack-fruits");
  document.getElementById("shift").innerHTML = shiftElement;
}

///slice ===================> slice

console.log("jskallllllllllllllll", shiftElement.slice(0, 2));
function removeOn() {
  document.getElementById("shift").innerHTML = shiftElement.slice(0, 2);
}

// =========================>Concat ===========================>
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
function concat() {
  document.getElementById("concat").innerHTML = myChildren;
}

///note about concat
/*
1: the concat method return a new array but it don't change the main array
*/

///the concat method take lots of number of array as arguments

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const concatAdd = arr1.concat(arr2, arr3);

function conCat() {
  document.getElementById("concat").innerHTML = concatAdd;
}

///the concat method also can take string as arguments

const addString = ["Emil", "Tobias", "Linus"];

const whoIs = addString.concat("mr alex"); //parentheses ('here the content is arguments')

function concatString() {
  document.getElementById("concat").innerHTML = whoIs;
}

/////remember that =>
// All JavaScript objects have a toString() method.

// ===============================Array Sort ========================>
const fruitsItemsOfCase = ["Banana", "Orange", "Apple", "Mango"];
fruitsItemsOfCase.sort();
fruitsItemsOfCase.reverse();
document.getElementById("fruitss").innerHTML = fruitsItemsOfCase;
document.getElementById("reseverse").innerHTML = fruitsItemsOfCase;
//=====================> Numeric Sort ==========================>
//the sort() method will produce incorrect result when the sorting Number
//=> but i can fix it providing function
const coins = [40, 100, 1, 5, 25, 10];
console.log(coins.sort()); //the result will get as a confusion
coins.sort(function (a, b) {
  return a - b;
});

document.getElementById("number").innerHTML = coins;

///
const pointsWithCoins = [40, 100, 1, 5, 25, 10]; ///

document.getElementById("numberWithReverse").innerHTML = pointsWithCoins;

function test() {
  pointsWithCoins.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("numberWithReverse").innerHTML = pointsWithCoins;
}

// ===================================>The Fisher Yates Method shuffle==========================>
/*
the above example are not accurate. the most popular method is shuffle
*/

const randomNumber = [40, 50, 60, 70, 90, 100];
document.getElementById("random").innerHTML = randomNumber;

function randomNumberOfANumbers() {
  for (let i = randomNumber.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = randomNumber[i];
    randomNumber[i] = randomNumber[j];
    randomNumber[j] = k;
  }
  document.getElementById("random").innerHTML = randomNumber;
}

// ===========================Sorting descending:=============\

const sortingDescending = [12, 25, 33, 46, 76, 12, 31];

sortingDescending.sort(function (a, b) {
  return a - b;
});
document.getElementById("click").innerHTML = sortingDescending[0];
document.getElementById("clickOn").innerHTML = myFunction(sortingDescending);
document.getElementById("clickOnMin").innerHTML =
  myFunctionTwo(sortingDescending);
// ==========================>Using Math.max() on an Array====================>
function myFunction(arr) {
  return Math.max.apply(null, arr);
}
function myFunctionTwo(arr) {
  return Math.min.apply(null, arr);
}

// ====================================> My Min / Max JavaScript Methods ======================>
const findMaxOrMin = [12, 25, 33, 46, 76, 12, 31];
document.getElementById("maxValue").innerHTML =
  maxValueThatWeNeed(findMaxOrMin);

function maxValueThatWeNeed(arr) {
  let len = findMaxOrMin.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

document.getElementById("minValue").innerHTML = minValueThat(findMaxOrMin);
function minValueThat(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//////////////////////

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

displayCar();
function disPlayShow() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }

    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayCar();
}

function displayCar() {
  document.getElementById("demo").innerHTML =
    cars[0].type +
    " " +
    cars[0].year +
    "<br>" +
    cars[1].type +
    " " +
    cars[1].year +
    "<br>" +
    cars[2].type +
    " " +
    cars[2].year;
}

// =====================================>Array iteration===========================>

//first we learn forEach
const numbersItems = [45, 4, 9, 16, 25];
let textOfText = "";
numbersItems.forEach(myNumbersItem);
document.getElementById("numberArray").innerHTML = textOfText;
function myNumbersItem(value, index, array) {
  textOfText += value + "<br>";
}
//2nd we learn map
const numberForMap = [45, 4, 9, 16, 25];
let mapNumber = "";
numberForMap.map(mapFunction);
document.getElementById("map").innerHTML = mapNumber;
function mapFunction(value, index, array) {
  mapNumber += value * 2 + "<br/>";
  console.log("value", value);
}

//3rd we learn filter
const filterNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const filterShow = filterNumber.filter(filterFunction);
document.getElementById("filter").innerHTML = filterShow;
function filterFunction(value, index, array) {
  return value > 35;
}

////always remember 'that foreach , map, filter' they always take three arguments

//4th we learn reduce
const reduceNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reduceNumbers = reduceNumber.reduce(reduceFunction);
document.getElementById("reduce").innerHTML =
  "the total number is - " + reduceNumbers;
function reduceFunction(total, value, index, array) {
  return total + value;
}
///reduce accept the initial value
const lotsOfNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reducesNumber = lotsOfNumber.reduce(myReducesFunction, 1000);
document.getElementById("reduce2").innerHTML =
  "the initial value is " + reducesNumber;
function myReducesFunction(total, value, index, array) {
  return total + value;
}
/*
there are 4 arguments in reduce 
1:total
2:value;
3:index
4: array
*/

///5th method we will learn reduceRight
/*
the reduce almost same as like reduce 
but one deferent is the reduceRight count rightSite to left site and also
there are 4 arguments in reduce 
1:total
2:value;
3:index
4: array
*/

//6th we will learn 'every'
// every always return true or false result

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrays = myArray.every(myEveryFunction);
document.getElementById("every").innerHTML = "the every method is  " + arrays;

function myEveryFunction(value, index, array) {
  return value > 0;
}

/*
there are 3 arguments in 'every' method
1:value;
2:index;
3: array
*/

///7th_method is 'some '
const mySomeArrays = [43, 54, 76, 87, 100];
const arraysOfSome = mySomeArrays.some(mySomeArray);
document.getElementById("some").innerHTML = "my some method is " + arraysOfSome;
function mySomeArray(value, index, array) {
  return value > 52;
}
/*
there are 3 arguments in 'some' method
1:value;
2:index;
3: array
*/
//// 8th method is indexOf

const indexOfArray = ["apple", "banana", "jack_fruits"];
let needIndex = indexOfArray.indexOf("jack_fruits") + 1;
document.getElementById("indexOf").innerHTML = " the index is " + needIndex;

//// 9th method is lastIndexOf
const indexOfLastArray = ["apple", "banana", "jack_fruits"];
let needIndexOfLast = indexOfLastArray.lastIndexOf("jack_fruits");
document.getElementById("LastIndexOf").innerHTML =
  " the index is " + needIndexOfLast;

///10th method is include
const indexIncludeArray = ["apple", "banana", "jack_fruits"];
let indexIncludeArrays = indexOfLastArray.includes("banana");
document.getElementById("include").innerHTML =
  " the include is " + indexIncludeArrays;

///11th method is 'find'
const lengthFind = ["apple", "banana", "jack_fruits"];
let letsFind = lengthFind.find(findLength);
document.getElementById("find").innerHTML = "the find result is " + letsFind;
function findLength(value, index, array) {
  return value.length > 7;
}

/*
the find result always accept 3 arguments ---->
1:value
2:index
3:array
*/

//12_method_is_findIndex()

// const numbersIndexes = [4, 9, 16, 25, 29];
// // let letsFindNumber = numbersIndexes.findIndex(findIndexLast);
// // document.getElementById("indexOf").innerHTML =
// //   "First number over 18 has index " + letsFindNumber;

// // function findIndexLast(value, index, array) {
// //   return value > 18;
// // }

////

/*
the findIndex result always accept 3 arguments ---->
1:value
2:index
3:array
*/

//13 now  we will learn array from
let arrayFrom = Array.from("ABCDEFG");
console.log(arrayFrom);

///it will return array

//13_ we will learn fruits
const fruitsKeys = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruitsKeys.keys();

let textFruits = "";

for (let x of keys) {
  textFruits += x + " <br />";
}

(document.getElementById("fruitsKEY").innerHTML =
  "the position is " + textFruits),
  textFruits;

////
const numbs = [4, 23, 56, 12, 66, 97, 40];
let val = numbs.filter((item) => {
  return item < 40;
});
console.log("val", val);

/////// =====================> js const array <===========================>
/*
in 2015, JavaScript introduced an important new keyword: const.


======================>array 'const'  cannot be reassign =====================>
1: array cant not be reassign
*/
// const carsItemsOfArray = ["Saab", "Volvo", "BMW"]; //allowed
// carsItemsOfArray = ["Toyota", "Volvo", "Audi"]; //not_allowed

/////// =====================> Array can declare by var <===========================>
/*
thats example
*/
carsWithVariable = ["Saab", "Volvo", "BMW"];
var carsWithVariable; /// reassign with variable

//note that: An array declared with var does not have block scope:

// => Redeclaring an array declared with var is allowed anywhere in a program:

var carItem = ["Volvo", "BMW"]; // Allowed
var carItem = ["Toyota", "BMW"]; // Allowed
carItem = ["Volvo", "Saab"]; // Allowed

///Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:
/*
var cars = ["Volvo", "BMW"];         // Allowed
const cars = ["Volvo", "BMW"];       // Not allowed
{
  var cars = ["Volvo", "BMW"];         // Allowed
  const cars = ["Volvo", "BMW"];       // Not allowed
}
*/

////we can declare const one more then in curly becket

// const reAssign = ["Toyota", "BMW"]; //allowed
// {
//   const reAssign = ["Toyota", "BMW"]; //allowed
// }

// // =======================> what is constructor function =====================>

// const date = getDate(); //its called a constructor function
