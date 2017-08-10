////// JAVASCRIPTING ///////////////////////////////////////
///// Introduction /////
console.log('hello');

///// Variables /////
let example = 'some string';
console.log(example);

///// Strings /////
let someString = 'this is a string'
console.log(someString);

///// string length /////
let example = 'example string';
console.log(example.length);

///// Revising strings /////
let pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful')
console.log(pizza);

///// numbers /////
let example = 123456789;
console.log(example);

///// rounding numbers /////
let roundUp = 1.5;
let rounded = Math.round(roundUp);
console.log(rounded);

///// number to string /////
let n = 128;
console.log(n.toString());

////// if statement ////////
let fruit = 'orange';
if (fruit.length > 5) {
  console.log("The fruit name has more than five characters.");
}else {
  console.log("The fruit name has five characters or less.");
}

///// for loop /////
let total = 0;
let limit = 10;
for (var i = 0; i < limit; i++) {
  total += i;
}
console.log(total);

///// arrays /////
let pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);

///// array filtering /////
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = numbers.filter(function evenNumbers(number){
  return number % 2 === 0;
});
console.log(filtered);

///// accessing array values /////
let food = ['apple', 'pizza', 'pear'];
console.log(food[1]);

///// looping through arrays /////
let pets = ['cat', 'dog', 'rat'];
for (var i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}
console.log(pets);

///// objects /////
let pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};
console.log(pizza);

///// object properties /////
let food = {
  types: 'only pizza'
};
console.log(food['types']);

///// functions /////
function eat(food){
  return food + 'tasted really good.';
}
console.log(eat("bananas "));

///// functions arguments /////
function math(a, b, c){
  return (b * c) + a;
}
console.log(math(53, 61, 67));

///// scope /////
var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: " + a + ", b: " + b + ", c: " + c);
             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();

//////////////// free code camp ///////////////////
/////////// factorialize /////////////
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
factorialize(5);

/////////// palindromes /////////////
function palindrome(str) {
return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
palindrome("eye");

/////////// seek n desroy /////////////
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/////////// confirm the ending /////////////
function confirmEnding(str, target) {
  var substring = str.substr(-target.length);
  var ending = (substring === target) ? true : false;
  return ending;
}
console.log(confirmEnding("Open sesame", "same"));

/////////// return largest numbers in array /////////////
function largestOfFour(arr) {
  let largestArr = [];

  for (var i = 0; i < arr.length; i++) {
    var largest = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    largestArr[i] = largest;
  }
  console.log(largestArr);
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
