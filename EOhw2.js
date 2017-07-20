// Problem 1
// Create a loop that starts at 1 and ends at 100.
// For every number divisible by 3, log 'Fizz' to the console.
// For every number divisible by 5, log 'Buzz' to the console.
// For every number divisible by both, log 'FizzBuzz' to the console.

for (var i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    console.log(i + ": FizzBuzz");
  }else if (i % 3 == 0) {
    console.log(i + ": Fizz");
  }else if (i % 5 == 0) {
    console.log(i + ": Buzz");
  }
}

// //////////////////////////////////////
// Problem 2
// Write a function that returns the average of the given array rounded down to its nearest integer.
// Hint: Math.floor()
// console.log(getAverage([2,2,2,2])); //2
// console.log(getAverage([1,2,3,4,5,])); //3
// console.log(getAverage([1,1,1,1,1,1,1,2])); //1

let myArr = [5,10,15,20,25,30];
let total = 0;

function avgArr(myArr) {
  for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
    // console.log(total);
  }
  let avg = total / myArr.length;
  console.log(Math.floor(avg));
}

avgArr(myArr);
