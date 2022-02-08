// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "ks",
//   }),
//   headers: { "Content-type": "application/json; charset=UTF-8'" },
// })
//   .then((res) => {
//     if (!res.ok) {
//       const sms = `error -> ${res.status}`;
//       throw new Error(sms);
//     }
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("api");

const ApiURL = async (postURL) => {
  const res = await fetch(postURL, {
    method: "DELETE",
    // body: JSON.stringify({
    //   title: "r",
    // }),
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  });
  if (!res.ok) {
    const message = `error : ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const postRequest = async () => {
  ApiURL("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    console.log(res);
  });
};

// const getRequest = async () => {
//   ApiURL("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
//     console.log(res);
//   });
// };

postRequest();
