// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a, b);
}// end func

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b){
  return a+b;
}//end func

function multiply(a, b){
  return a*b;
}//end func

function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}//end func


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

// when a new scope is created a closure between the local scope and the global scope is created allowing a function to look outside its scope for a var, but this is only one directional. An outside function cannot look inside another function to find var. Further, you could argue that the 'nestedFunction' is invoked in the same scope as the 'internal' var, and the same is true for the 'myfunction' being invoked in the same scope as the 'external' var.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
