////javascript__string__method

//slice
let names = "apple,banana,mango";
let namesList = names.slice(-12, -6);
console.log(namesList);

//substr

let namesTwo = "alex, john, rabecca";
namesTwo.substr(6, 13);
console.log(namesTwo.substr(6, 13));

///what is the different between substr vs slice

//Answer:The difference is that the second parameter specifies the length of the extracted part.
/*bangla: 'substr' bolte jototok neoa hobe orthat ami 6 length theke nibo ar ami 6 theke 13 length,
 tahole amk likhte hobe  =========>
parenthese a (6,13)*/

//replace

let loves = "love you abbu & abbu";
let replace = loves.replace("abbu", "ammu");
console.log(replace);

///concat

/*concat er kaj hocche kono kichu ke jog kora string er shtahe  ===>*/

let personOne = "riaz";
let personTwo = "akhondo";

let adjust = personOne.concat(" ", personTwo);
console.log(adjust);

///trim

// trim are replace the whitespace as like as

let text =
  "                         my name is riaz ahmed akhanda                    ";
let changeText = text.trim();
console.log(changeText);

// ======================>String immutable ===============>

// question-one: is javascript String mutable???

/* answer:No. 'javascript string is always immutable .

orthat javscript string ta jevabe deoa hoy seti default vabe shei vabe thake .

one thing is remember that 'string always mutable'.string cant be change.\

Only string can be replaced*/

// =====================>padStart and padEnd ===============>

/*what is the padStart and padEnd */

/*Answer is: padStart make padding by using '0' on left side and padEnd make space By using
'0' on the right side*/

let padStartOne = "5";
let result = padStartOne.padStart(6, 0);
console.log(result);
///
let padEnd = "7";
let endResult = padStartOne.padEnd(6, 0);
console.log(endResult);

///// we can slice using [] like slice.

const any = "Hello World";
const anyResult = any[1];
console.log(anyResult);

///============> string convert into array using split ==========>

let textMakeIntoArray = "hello world";
// let arrayResult = textMakeIntoArray.split(","); ///split by comma
// let arrayResult = textMakeIntoArray.split(" "); ///split by white space and make two values
// let arrayResult = textMakeIntoArray.split(""); ///split by comma it will return single character
let arrayResult = textMakeIntoArray.split(" "); ///split by pipe it will return like comma
console.log(arrayResult);
//////learn undefine=========>
/*what is undefine ?

Answer: Undefine is value and also a data type'..*/
// ==========
// ========
let prs = "7";
console.log("paddd", prs.padStart(4, 7));

let str =
  "The quick brown fox over the lazy Dog. if the dog reacted,was it really lazy";
console.log(str.slice(10, 15));
console.log(str.replace("dog", "cat"));

//====================/////In this part we will learn String Search ================>>>

/* There are main fours method for string search 
1.String.indexOf()
2.String.lastIndexOf()
3.String.startWith()
3.String.endWith()
*/

///indexOf  ===> the main work of indexOf find out any value from the left first occurrence
///indexOf ==> indexOf kaj hoccche bam dike theke value neoa

///example=======>
let indexOf = "Please locate where 'locate' occurs!";
console.log(indexOf.indexOf("where"));
///it will returns 14

//note : javascript count position start from 0 position on the left side

// ==========================indexOfLast===============================>
//indexOfLast==> the main work is of indexOfLast is find out any value from the right side last occurrence
//indexOfLast ===> mane hocche indexOfLast dara amra dan dik theke kono value khujhe ber korte pari..
let indexOfLastThing = "Please locate where 'locate' occurs!";
console.log(indexOfLastThing.lastIndexOf("locate"));
//
let searchValue = "Please locate where 'locate' occurs!";
console.log(searchValue.lastIndexOf("john"));

///it will return -1
/*note that => it has been showed the -1 ,because the 'john' value isn't available in the line
of 'searchValue'*/

let searchWordByCount = "Please locate where 'locate' occurs!";
console.log(searchWordByCount.indexOf("locate", 15));
//note:====> (locate,15) ekhane  15 dara bujhacche 15 number length theke shey khujha shuru korbe
///it will return 21
///try-with-lastIndexOf
let searchWordByLastIndexOf = "Please locate where 'locate' occurs!";
console.log(searchWordByLastIndexOf.lastIndexOf("locate", 15));

/*note: lastIndexOf dara bujhay je ata shesher orthat biporid theke count kore orthat
lastIndexOf er khetre ata dan dike theke shuru kore count kora*/

// ======================>others method for string search ============>
/* beside there are more string search
1.String.search()
2.String.includes()
3.String.match()
*/

//search

let search = "Please locate where 'locate' occurs!";
console.log(search.search("where"));

/*Did you notice that indexOf and search are equal?
answer: in answer , no they are not same ! because of
'search' cannot take arguments or parameter but the 
'indexOf' can take parameter or arguments..beside we can write 
expression in indexOf that. for that 'indexOf' is more powerful
then 'search.*/

///===> match
/*match dara amra kono kichu likhe tar rup onujayi jodi paoa jay setai e shey dekhabe othba
return korbe*/

let matchCount = "he is coming and mr akram is going";
console.log(matchCount.match(/ing/g));

///note: remember that 'match' always return his result into an array.

// ====>String includes
/*about includes: OK, include return a value or many if those value are matched then it 
will return.....! 
mane hocche include akta specified value return kore jodi ata thake ba define kora thake*/

//an example

let include = "hello world";
console.log(include.includes("world"));

///if it was true it return true, if it was false and it will return false

///remember that include accept the arguments or parameter like indexOf

let includeExampleWithParameter = "Lorem ipsum dolor sit amet consectetur.";

console.log(includeExampleWithParameter.includes("sit", 17));

///it will return true.......

// =========>startsWith

/*about startWith: startWith always accept the value from the start of 
values or parameter.. if he get any result it will show 'true'.remember that
'startWith' always return 'specified value'*/

let startWith = "hello world. im one person who live in your place";
// console.log(startWith.startsWith("hello")); //it will return true
console.log(startWith.startsWith("world")); //it will return false.

/* if we need any value by using startWith we can apply a parameter like indexOf
then we can access any value.
but indexOf and startWith they are not same because 'startWith' specified value from 
the startOf value otherwise the indexOf can access any value from the whole value '
*/

let startWithCount = "hello world. im one person who live in your place";
console.log(startWithCount.startsWith("im", 13));
///it will return true

let textOne = "Hello world, welcome to the universe.";
console.log(textOne.startsWith("world", 5)); ///it will returns false

//
let textTwo = "Hello world, welcome to the universe.";
console.log(textTwo.startsWith("world", 6)); ///it will returns true

/////endsWith  ================> endWith

/*
note down that: ekhane koma porojonto 11length ache er majh theke e shey world nibe...*/

let endWith = "Hello world, welcome to the universe.";
console.log(endWith.endsWith("world", 11));

// =====================================================>javascript String template ============>
// =====================================================>javascript String template==============>

// template /////
////literal syntax
let literalString = "hello world"; ////literal syntax
////literal syntax
let literalStringWithDoubleEqual = "hello world"; ////literal syntax
// Back-Tics literal Syntax
let backTicsLiteralSyntax = `hey i am literal back-tics syntax`; ////its called a Back-Tics literal Syntax

/* about Back-Tics literal Syntax */
/* answer: back-tics is more powerful then 
single '' or "" . when we need to use of sign '' or " "
we need edit many thing as like the below example

*: let x='hello i/'am riaz', then we customize our code by using '/' or " " or ''.
but in back-tics we don't need '\' or '' or "". we can declare and customize our 
code freedom and also we can show unlimited line break  if we want. 
then it never show any error*/

// ================>what is Interpolation => `${}` ===========>

/* Interpolation => ${} ///it's called a Interpolation `${}`*/

//inter pollution example =>

let country = "Bangladesh";
let a = 5;
let b = 17;

let aboutYourCountry = `i loves my ${country} 
and its population about ${a + b}%`; //it's called a Interpolation process or variable Substitutions

console.log(aboutYourCountry);
