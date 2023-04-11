// <!-- Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it. -->

function createAdder(numToAdd) {
    return function(num) {
      return num + numToAdd;
    }
  }
  const addFive = createAdder(5);
  console.log(addFive(10));
  console.log(addFive(20)); 
  console.log(addFive(30)); 
  