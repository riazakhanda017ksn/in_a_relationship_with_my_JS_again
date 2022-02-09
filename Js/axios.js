const makeRequest = async (config) => {
  return await axios(config);
};

const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
updateData();
