/////javascript---tricks------->>>>>
// alt press kore up arrow and down arrow chaple line opor niche ashe

// ...............journey javascript............

// const nameOf = {
//   name: "x",
//   address: "y",
// };

// console.log(typeof nameOf);

// // what is call back function___________>

// answer:function is a method

// function sleep() {
//   console.log("i want to sleep");
// }

// sleep(); =============> /*thats it called a 'CallBack___function'*/

////Literals____means it fixed,its not changed able

////we can declare var any where as like

// var a = 10;
// var a = "riaz";

// console.log(a);

// also let we can declare any where but it has a different system

// let a = 10;
// a = 1;
// console.log(a);

//note: from this example i can got a system that ===> by same varrible /value is note allowed in let as like//

// let a = 10;
// let a = 1;
// console.log(a);

///it will show an error

// to understand the functional concept or unit--here is the example =>

/*function peopleActivities(name, time) {   
  console.log(name + " " + "wake up at" + " " + time); 
}
peopleActivities("sakib", "7.am");
peopleActivities("elias", "10.am");
peopleActivities("arafat", "9.am");*/

/// its called a functional concept or unit

// function callback = invocation   =====>
// callback function ke abar function invocation bole

// =======================>>>>>>learn argument and parameter ====================>>>>

////now i understand what is argument and what is parameter of function ====>>>

// function myActivities(at, name, time) {
//   // its called parameter =>//
//   console.log(
//     "at " +  at + " " + name + " wake up and go to the bed at the time of " + time
//   );
// }

// ekhane first backet moddhe ja ache tai e arguments

// myActivities("7 am", 'sakib"s', "11 pm"); ///here  ('7 am','sakib"s', '11 pm')  it called a arguments
// myActivities("7 am", 'riaz"s', "11 pm"); //("7 am", 'riaz"s', "11 pm")
// myActivities("7 am", 'amzad"s', "11 pm"); ///("7 am", 'amzad"s', "11 pm")  its called a arguments
// myActivities("7 am", 'elias"s', "11 pm");

// note : parameter value hocche => arguments

// ===> return concept///

// important rules => returns vs function executing
///
// ================================>return vs function====================>
///
// when i use 'return' the function will stop executing  these line means that =>

// * jokhon ami kono function bebohar korbo jodi ami return use kori function vitore tahole baire
// callback function kaj korbe kintu return console.log onno kichu kaj korbe na.

//   ==================> about function return =======================>

// return is the last statement , atar pore kono kichu 'call' kora jay na othoba

// console.log('something') => call kora jay na

// ==================> example of return statement of function =============>

// function myFunction(a, b) {
//   return a + b; // return with values
// }
// let x = myFunction(15, 20);

// console.log(x);

////without return value it will show undefined

function myFunction(a, b) {
  // return a + b; // without value of return it will show undefined
  console.log("undefined");
}
let x = myFunction(15, 20);

console.log(x);

////we can declare a function in the object of javascript.. i give you one example

function totalCount(a, b) {
  return a + b; // return with values
}
let hisAge = totalCount(77, 88);

let outOfResultOfAge = "his age is " + hisAge;
//
console.log(outOfResultOfAge);

///========================>local variable use into function===========================>

function carName() {
  let name = "Audi";
  console.log(name);
}
///without callback function the let name='audi', variable value wouldn't be work

// after callback the  car name function it will show absolutely
carName();

///============================>Parentheses or () ==========>

// first Becket() ,called a Parentheses

// an example=> ( ) first Becket() othoba Parentheses chara kono function ke
// console.log() korle function structure tai e dekhabe

///example=>my-function()

// ==============================>OBJECT+++++++++++++++++++++++>

//  =====================> object rules and regulation===========>

// remember one thing that when i work with i will use the 'const' , should"nt use 'let'

//
//remember one thing that when i work with i will use the 'const' , should"nt use 'let'//

/// *'const' amra use korbo object khetre oi karone jokhon ei object ta amar ditio bar use korbo na

///** ditio bar use korte chaile amra 'let' use korbo ,

//***/ but best practice hocche 'const' use kora

///
///
///

// ==============>Literal && Object definition=========>

// See it ===>  what is literal or literal mane ki???

/*Answer: => literal hocche amra jokhon kono value ke shorashori likhe dei => as like

let name='riaz'  ////*/

/// literal hocche jokhon amra kono kichu shorashori likhe dei

//  ================> What is Literal Object ===============>

const person = { firstName: "John", lastName: "Doe", Age: "19" }; //its called literal Object

//its called literal Object

// ==========>we can declare a function into an object=========>
// mane hocche amra chaile kono function ke amra object moddhe
// rakhe pari

// example =>

const aboutMe = {
  name: "riaz",
  age: "22",
  class: 11,
  birthDate: function () {
    console.log("1999-06-01");
  },
  hobby: function () {
    console.log("i want to be software engineering");
  },
};

console.log(aboutMe.name);
console.log(aboutMe.birthDate());

// we can also check the function without console.log()
aboutMe.birthDate();

//we can also show data by using
console.log(aboutMe["age"]);

//
// ====================> what is Object method or what is method ==============>

/*jokhon amra kono function object er moddhe use korbo tokhon amra take 'Method' bolbo*/
//
// example = >

const method = {
  birthDate: function () {
    console.log("1999-06-01"); //  its called a method
  },
  hobby: function () {
    console.log("i want to be software engineering"); //  its called a method
  },
};

// ===================> rules and regulation of 'this'/ how  we can use 'this'==================>

////we can use 'this keyword' in object of function /// let's see it

/// this is 'Caller Object'
//
const howToUseThisKeywordInAObject = {
  name: "finally i have learnt the this keyWord",
  thisKeyword: function () {
    console.log(this.name);
  },
};

console.log(howToUseThisKeywordInAObject.thisKeyword());

howToUseThisKeywordInAObject.thisKeyword();

////i can use any function into another function of object

// example

const How_To_Use_A_Function_Into_Another_Function_Using_This_Keyword = {
  name: "how to use a function into another function of object",
  functionOne: function () {
    console.log("ofCourse ! this number one function ");
  },
  functionTwo: function () {
    this.functionOne();
  },
};

console.log(
  How_To_Use_A_Function_Into_Another_Function_Using_This_Keyword.functionTwo()
);

How_To_Use_A_Function_Into_Another_Function_Using_This_Keyword.functionTwo();

// =====================>again return literal syntax====================>

////again return literal syntax

let anyNumber = 5; /// its called a literal syntax

//  <=============variable declare With new keyword================>

// rules

//When javascript is declare with the keyword 'new' ,then the variable is created an Object :

let namesOfAPerson = new String("akram sakib");
console.log(namesOfAPerson);

let nameOfNumber = new Number("01906777757");
console.log(nameOfNumber);

///
const namesItems = {
  name: "x",
  age: "15",
};
const namesItemsTwo = {
  name: "x2",
  age: "15",
};

console.log("hey", namesItemsTwo.namesItems?.name);

////exercise

// alert(namesItems["name"]);

document.write(namesItems.name);
document.write(namesItems["name"]);

// function sayHello() {
//   console.log(name);
//   console.log(age);
//   var name = "js";
//   let age = 21;
// }

// sayHello();

////

//////////////////////////////////// __javascript____event_list================>

///there are lots of events in javascript and also have html, lets know about js and html event =>

/*
1.onclick,\
2.onchange,
3.onmouseover
4.onkeydown
5.onload
*/

//////===============>in this part we will  learn the javascript => 'String'

// introduction : string also a subject it's means everything javascript are objects

let character = "inThisPartIWillLearnJavascript";
console.log(character.length);

//

// ----------------Escape Character In String------------>

// let name='my name is 'riaz ahmed akhanda'' // when i use same comma it will show error

// when i use same comma it will show error

// when i use '\\' it will fixed ,,, below the example

/*let myName = "my name is \"riazahmedakhanda\""; //it will work for an especial word
console.log("this my name", myName);*/

//
// another example is =>

// let myName = "my name is \\riazahmedakhanda\\"; //it will work for an especial word
// console.log("this my name", myName);

//===================// backslash for line break============>//

let myText = "Lorem ipsum dolor sit \
        amet consectetur adipisicing"; //its correct...

///without backslash the line break didn't work , it will show an error!!!!

///how to make a string as object /// ok im showing here

/*let generalString = "this is general string"; //its called a literal syntax

let thisIsObjectString = new String("this is object String"); //its not a literal syntax
*/
//
///=======================lets touch a important topic===================================>

let generalString = "we are same"; //its called a literal syntax

let thisIsObjectString = new String("we are same"); //its not a literal syntax

/*question: is let value are equal ??? 

answer: yes ! if it has same value with same length it will show true... 

as example here*/

console.log(generalString == thisIsObjectString);

/* the result will show true if the length same or the word space has same*/

/*When i use '===' it will show 'false'  because === check value and type*/

console.log(generalString === thisIsObjectString);

///The result will get as 'false' , because the triple equal discuss their value and type //

// ==========================>important rules for compare between String vs Object===================>

/*we have compared with string vs object.. But when
we are compare 'Object to Object' it will show False ,

//hok ata == or === equal

========================Now lets see the example ==================> */

let objectOne = new String("objectOne");
let objectTwo = new String("objectTwo");
console.log(objectOne == objectOne); //it will show false
console.log(objectOne === objectTwo); // it will show false

/*it will show false after using == equal and === triple equal because in javascript 
object  can't be same. its always return false */

// ==================> Remember one thing =================>

// Object {} and Array []  are not a primitive value
