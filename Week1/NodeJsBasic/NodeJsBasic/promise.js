// const delay = ms => new Promise(res => setTimeout(res, ms));
// // const delay = ms => new Promise((resolve) => {
// //     setTimeout(()=>{
// //         resolve()
// //     },ms)
// // });

// // function delay(ms) {
// //     // return new Promise(res => setTimeout(res, ms))
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve()
// //         }, ms)
// //     })
// // }

// const promise1 = async () => {
//   await delay(1000);
//   console.log("Promise 1 executed")
// };

// const promise2 = async () => {
//   await delay(9000)
//   console.log("Promise 2 executed")
// };

// // Consider this to be a controller
// (async () => {
//   try {
//     const start = new Date();
//     await Promise.all([
//         promise1(),
//         promise2()
//     ]);
//     const end = new Date() - start
//     console.info('Execution time: %dms', end) // This will take 3s only
//   } catch (e){
//     console.log("Got an error here")
//   }
// })();

const delay = ms => new Promise(res => setTimeout(res, ms));


const promise1 = async () => {
  await delay(1000);
  console.log("Promise 1 executed")
};

const promise2 = async () => {
  await delay(3000)
  console.log("Promise 2 executed")
};

// Consider this to be a controller
(async () => {
  try {
    const start = new Date();
    await Promise.all([
        promise1(),
        promise2()
    ]);
    const end = new Date() - start
    console.info('Execution time: %dms', end) // This will take 3s only
  } catch (e){
    console.log("Got an error here")
  }
})();