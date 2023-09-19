var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function multiply(a, b) {
  return a * b;
}

// function to ask a question based on the multiply function
function solve(caseNumber) {
  rl.question(
    "Enter two numbers separated by a space (e.g., 4 4): ",
    (input) => {
      const [num1, num2] = input.split(" ").map(Number);

      if (!isNaN(num1) && !isNaN(num2)) {
        const result = multiply(num1, num2);
        console.log(`The product of ${num1} and ${num2} is: ${result}`);
      } else {
        console.log("Invalid input. Please enter two numbers.");
      }

      // make the test case limit
      if (caseNumber < 3) {
        solve(caseNumber + 1);
      } else {
        rl.close();
      }
    }
  );
}

// run the function
solve(1);
