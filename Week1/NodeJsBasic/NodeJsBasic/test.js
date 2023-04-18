import GetApi from "./apiRequest.js";

GetApi('https://jsonplaceholder.typicode.com/comments')
    .then((res) => console.log(res))