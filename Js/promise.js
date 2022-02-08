// // js promise
// const myPromise = new Promise((resolve, reject) => {
//   let myMindForYou = true;
//   setTimeout(() => {
//     if (myMindForYou) {
//       resolve("yes his mind is absolute clean for you");
//     } else {
//       reject("never go with him. Leave him !");
//     }
//   }, 2000);
// });

// const mySecondPromiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("you and you too are married now");
//   }, 1000);
// });
// try {
//   myPromise.then((response) => {
//     console.log(response);
//   });
// } catch (error) {
//   console.log(error);
// }

// try {
//   mySecondPromiseTwo.then((res) => {
//     console.log(res);
//   });
// } catch (error) {
//   console.log(error);
// }

// try {
//   Promise.all([myPromise, mySecondPromiseTwo]).then((res) => {
//     console.log(res);
//   });
// } catch (error) {
//   console.log(error);
// }
// try {
//   Promise.race([myPromise, mySecondPromiseTwo]).then((res) => {
//     console.log("race", res);
//   });
// } catch (error) {
//   console.log(error);
// }

///Promised done and again practice

// const myPromiseForProgramming = new Promise((resolve, reject) => {
//   const programmingPromise = true;
//   setTimeout(() => {
//     if (programmingPromise) {
//       resolve("never give up");
//     } else {
//       reject("give up");
//     }
//   }, 2000);
// });
// const myPromiseForProgrammingTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("please give a time");
//   }, 3000);
// });
// try {
//   Promise.all([myPromiseForProgramming, myPromiseForProgrammingTwo]).then(
//     ([resOne, resTwo]) => {
//       console.log(resOne);
//       console.log(resTwo);
//     }
//   );
// } catch (error) {
//   console.log(error);
// }
// try {
//   Promise.race([myPromiseForProgramming, myPromiseForProgrammingTwo]).then(
//     (res) => {
//       console.log(res);
//     }
//   );
// } catch (error) {
//   console.log(error);
// }
// try {
//   myPromiseForProgrammingTwo.then((res) => {
//     console.log(res);
//   });
// } catch (error) {
//   console.log(error);
// }
// try {
//   myPromiseForProgramming.then((res) => {
//     console.log(res);
//   });
// } catch (error) {
//   console.log(error);
// }

const myPromise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task One");
    }, 1000);
  });
};
const myPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task Two");
    }, 2000);
  });
};
const myPromise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task Three");
    }, 3000);
  });
};
const myPromise4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task four");
    }, 4000);
  });
};
const myPromise5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("task 5 is error");
    }, 5000);
  });
};

// myPromise1()
//   .then((res) => {
//     console.log(res);
//   })
//   .then(myPromise2)
//   .then((res) => {
//     console.log(res);
//   })
//   .then(myPromise3)
//   .then((res) => {
//     console.log(res);
//   })

//   .then(myPromise4)
//   .then((res) => {
//     console.log(res);
//   })

//   .then(myPromise5)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const asyncFunction = async () => {
  try {
    const t1 = await myPromise1();
    console.log(t1);
    const t2 = await myPromise2();
    console.log(t2);
    const t3 = await myPromise3();
    console.log(t3);
    const t4 = await myPromise4();
    console.log(t4);
    const t5 = await myPromise5();
    console.log(t5);
  } catch (error) {
    console.log(error);
  }
};
asyncFunction();
