window.promises = [];


// Do not change the code above this
// add your promises to the array `promises`
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Sorry no data found");
    resolve("Here is your data...");
  }, 2000);
});

// console.log("Promise", myPromise, new Date());

// myPromise
//   .then((data) => {
//     console.log("DATA....", data);
//   })
//   .catch((err) => {
//     console.log("CATCHING....", err);
//   });
