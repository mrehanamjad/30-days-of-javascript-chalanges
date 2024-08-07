// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(n: number): void {
  n % 2 === 0 ? console.log("Even") : console.log("Odd");
}
isEven(23);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(n: number): number {
  return n * n;
}
console.log(square(3));

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function MaxOfTwoNumbers(a: number, b: number): void {
  let max: number = a > b ? a : b;

  console.log(max);
}
MaxOfTwoNumbers(45, 55);

// Task 4: Write a function expression to concatenate two strings and return the result.
function concatStr(x: string, y: string): string {
  return x + y;
}
console.log(concatStr("Rehan ", "Amjad"));

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
type Sum = (a: number, b: number) => number;
const sum: Sum = (a, b) => a + b;
console.log(sum(3, 77));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const hasChar = (str: string, ch: string): boolean => {
  for (let c of str) {
    if (c == ch) return true;
  }
  return false;
};
console.log(hasChar("Rehan", "a"));

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function productOfTwo(a: number, b: number = 5): number {
  return a * b;
}
console.log(productOfTwo(2));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name: string, age: number = 18): string {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greeting("Ali", 23));
console.log(greeting("Waseem"));

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeat = <T>(func: () => T, times: number): void => {
  for (let i = 0; i < times; i++) {
    func();
  }
};

repeat((): void => {
  console.log("Chai");
}, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions<T, U, V>(func1: (arg: T) => U, func2: (arg: U) => V, value: T): V {
  return func2(func1(value));
}

const addTwo = (x: number): number => x + 2;
const multiplyByThree = (x: number): number => x * 3;

const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result); // Output: 21
