// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals
// - Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let personName = "ALi";
let personAge = 23;
let lit = `${personName} is ${personAge} years old`;
console.log(lit);

// - Task 2: Create a multi-line string using template literals and log it to the console.
const para: string = `
JavaScript is a cross-platform, object-oriented scripting language 
used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).
There are also more advanced server side versions of JavaScript such as Node.js,
which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).
Inside a host environment (for example, a web browser),
JavaScript can be connected to the objects of its environment to provide programmatic control over them.
`;
console.log(para);

// Activity 2: Destructuring
// - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numArr2: number[] = [1, 2, 3, 4, 5, 6];
const [a, b, c, d, e, f] = numArr2;
console.log("first element:", a, "last:", f);

// - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const bookD: { title: string; author: string; published: number } = {
  title: "Clean Code",
  author: "Robert Cecil Martin",
  published: 2012,
};
const { author, title } = bookD;
console.log("title:", title, "& author:", author);

// Activity 3: Spread and Rest Operators
// - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let newNumArr2: number[] = [...numArr2, 101, 102, 203, 304];

// - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const restSum = (...arg: number[]): number => {
  let sum = 0;
  for (const val of arg) {
    sum += val;
  }
  return sum;
};
console.log(restSum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters
// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiplyNum(a: number, b: number = 1) {
    return a*b
}
console.log(multiplyNum(5,5));
console.log(multiplyNum(5));

// Activity 5: Enhanced Object Literals
// - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const Title = "The C Programming Language. 2nd Edition";
const Author = "Brian Kernighan";
const Year = 1978;

const bookk = {
  Title,
  Author,
  Year,

  getDetails() {
    return `${this.Title} by ${this.Author}`;
  },

  [`publishedYear`]: Year
};

console.log(bookk);

// - Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName1: string = "title";
const propName2: string = "author";
const propName3: string = "year";

const book = {
  [propName1]: "Code Complete",
  [propName2]: "Steve McConnell,",
  [propName3]: 1993,
  getDetails(): string {
    return `${this.title} by ${this.author}`;
  }
};

console.log(book);
console.log(book.getDetails()); 
