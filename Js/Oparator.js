// Arithmetic Operator

// + - * /

// + plus
// - (minus)
// * (gun)
//  / (vag)
// % (percent)

// ++ (looping decrease)
// -- (looping decrease)

// 1) percentice oparetor (%)

// *) percent oparator shadharonoto vag shesh ber korar jonno bebohit hoy --- example

var a = 10;
var b = 6;

console.log("vag shesh", a % b);

//Incremental

// --- pre incremental - post incremental

console.log(a++); //its mean -> a + 1 (post incremental- its called called post incremental)

console.log(a);

console.log(++b); // its called pre incremental (it happen - > 1+b)

// assignment--oparetor
var number1 = 6;
var number2 = 5;

number1 += number2;
console.log("first", number1);

number1 -= number2;
console.log(number1);

number1 *= number2;
console.log(number1);

number1 /= number2;
console.log(number1);

number1 %= number2;
console.log(number1);

///comparison oparetor

//remember that

// (=) is a assignment operators

// (==) is a comparison operators

var num1 = 10;
var num2 = 20;
//comparison operators - always provide us boolean operators like true or false

console.log("boolean result", num1 == num2); //equal checking ==== false

console.log(num1 != num2); //not equal checking === true

console.log(num1 > num2); // false

console.log(num1 < num2); // true

// num1 = 20;

console.log(num1 >= num2); /// boro hote pare abar choto o hote pare ====> false

console.log(num1 <= num2); // choto hobe othoba soman hobe ===> true

var numOne = "50";
var numTwo = 50;

console.log(numOne == numTwo); //it cannot check type of value for that it will return -> true
console.log(numOne === numTwo); // its also check type and also value ===> ata value check korbe abong value o ---> false

console.log(numOne !== numTwo);

// logical operators
//  &&  dui ta condition e shotti hote hobe orthat 'numOne' o shotto hote hobe 'numTwo' sotti hote hobe

// (|| or operators) dui ta condition er moddhe theke jekono aktaa shotti hole e hobe

/// (! not operator) pura condition statement majhe jeita negative oita oita e provide korbe
