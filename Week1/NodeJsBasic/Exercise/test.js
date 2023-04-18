async function helloWorld() {
  console.log("Hello world");

  return "hello world";
}

(async () => {
  const name = await helloWorld();
  console.log('name', name);
})();

// console.log("name varialbe", name);

// async function example() {
//   const name = await helloWorld().then((res) => res);
//   console.log("name", name);
// }
// example();

// var promise = new Promise(function (resolve, reject) {
//   var value = 0.3;

//   if (value > 0.5) {
//     resolve(value);
//   }

//   reject("error");
// });

// // promise.then(function (value) {
// //   console.log(value);
// // });

// (async () => {
//     try {
//         const valuePromise = await promise
//         console.log("res", valuePromise);

//     }catch(err){
//         console.log("err")
//     }
// })();
