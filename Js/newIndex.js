// import { text as message, myTextFun } from "./export.js";
// myTextFun("hello world riaz");
// console.log(message);

// class student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   set otherStudentName(name) {
//     this.name = name;
//   }
//   get studentInformationMore() {
//     return this.name + " " + this.id;
//   }
// }

// let studentInformation = new student("559773", "riaz ahmed akhanda");

// console.log(studentInformation.studentInformationMore);

// const taskOne = () => {
//   console.log("task is working");
// };
// const fetchApi = () => {
//   console.log("Api is working");
// };
// const fetchApiTwo = () => {
//   console.log("Api is working 2222");
// };
// const taskTwo = () => {
//   setTimeout(fetchApi, 6000);
// };
// const taskThree = () => {
//   console.log("task is working three");
// };
// const taskFour = () => {
//   setTimeout(fetchApiTwo, 3000);
// };
// const taskFive = () => {
//   console.log("task is working five");
// };
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

function square(n) {
  console.log(`${n} square : ${n * n}`);
}

// square(101010);

function names(num, callback) {
  callback(num);
}

names(9, square);

const taskOne = (callback) => {
  console.log("task is working");
  callback();
};
const fetchApi = () => {
  console.log("Api is working");
};

const taskTwo = (callback) => {
  setTimeout(fetchApi, 6000);
  callback();
};
const taskThree = (callback) => {
  console.log("task is working three");
  callback();
};
const fetchApiTwo = () => {
  console.log("Api is working 2222");
};
const taskFour = (callback) => {
  setTimeout(fetchApiTwo, 3000);
  callback();
};
const taskFive = () => {
  console.log("task is working five");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});
// taskTwo();
// taskThree();
// taskFour();
// taskFive();
