// ==============================Math Subject=======================>

const strDate = new Date(); ///its called constructor function

const strMath = Math.PI; // its not a constructor  function

/// always remember that math object is a static

//** Javascript has eight math meticals constant that can be access  */

/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

///==========================> Number to Integer ===========================>

/*
there are four way to convert decimal number into integer
*/

// :1->round
const strRound = 3.1243455;
console.log(Math.round(strRound)); //it will return - integer Number
//jodi number .5 er theke beshi hoy tahole purno shongkkha return korbe

//:-> ceil
const strCeil = 2.51222123;
console.log(Math.ceil(strCeil)); //again it will return a - integer Number ->
//jodi number .5 er theke beshi hoy tahole purno shongkkha return korbe

///->floor

const strFloor = 3.65474;
console.log(Math.floor(strFloor)); /// it will be return a integer a number

console.log(Math.floor(-4.1)); // negative number er
//khetre jodi decimal shongkkha thake tahole tahole ->  ata purno '-minus' shongsha return korbe

// - > trunc

const strTrunc = 6.7;
console.log(Math.trunc(strTrunc)); /// it will be return a integer number - ES6 Feature

// =======================> Math.sign =======================>

const strSign = 6;

console.log(Math.sign(strSign)); // it will return 1 because it has positive number
console.log(Math.sign(-8)); // it will return -1 because it has negative number

// =============> math pow =============>

const strPow = 6;
console.log(Math.pow(strPow, 2)); /// it return a with double count

/// ================> math square =============>
console.log(Math.sqrt(64));

//===============> abs ==============>
console.log(Math.abs(-2)); //it will return => 2

// ==========================================> In this tutorial we will learn random =======================>

console.log(Math.random()); ///remember that random number always return 1 er theke shob cheye choto number

// =======================> JavaScript Random Integers  ================================>

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 100) + 1);

// =================> proper way to get random() number ============>

function bestAwayToGetRandomNUmber(max, min) {
  return Math.floor(Math.random() * (min - max + 1)) + max;
}

const strRandom = bestAwayToGetRandomNUmber(10, 20);

console.log("random - ", strRandom);

console.log(Math.random() * 100 + 1);
console.log(Math.round(1.499));
