var readline = require("readline");

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function fearNotLetter(str) {
//   // return str;
//   console.log(str)
//   // for (let i = 0; i < str.length; i++) {
//   //   console.log(i);
//   // }
//   // let pat = /[a-z]/gi;
// }

// fearNotLetter("itulah memang")

// r1.on("line", function () {
//   console.log("Case #1: ", fearNotLetter("abce"));
//   console.log("Case #2: ", fearNotLetter("abcdefghjklmno"));
//   console.log("Case #3: ", fearNotLetter("bcdf"));
// });

function multiply(a, b) {
  // return a * b
  console.log(a * b)
}

r1.on("line", function () {
  console.log("Case #1: ", multiply(4, 4));
  console.log("Case #2: ", multiply(4, 2));
  console.log("Case #3: ", multiply(4, 4));
});
