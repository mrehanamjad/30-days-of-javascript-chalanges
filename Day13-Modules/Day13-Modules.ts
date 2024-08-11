import axios from "axios";
import { add, personO,subtract,multiply,divide } from "./mod.js";
import helloBro from "./Module.js";
import * as myModule from './myModule.js';
import _ from 'lodash';

// Day 13: Modules
// Tasks/Activities:
// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
console.log(add(5, 6));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
console.log(personO);
console.log(personO.getInfo());

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const num1 = 10;
const num2 = 5;

console.log(`Add: ${add(num1, num2)}`);        
console.log(`Subtract: ${subtract(num1, num2)}`); 
try {
    console.log(`Divide: ${divide(num1, num2)}`);
} catch (error) {
    console.log(error);
}
console.log(`Multiply: ${multiply(num1, num2)}`); 
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
helloBro()

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// main.ts

console.log(`PI: ${myModule.PI}`);
console.log(`E: ${myModule.E}`);

const radius = 5;
console.log(`Area: ${myModule.calculateArea(radius)}`);
console.log(`Circumference: ${myModule.calculateCircumference(radius)}`);

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray: number[][] = _.chunk(numbers, 3);
console.log('Chunked Array:', chunkedArray);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
    axios.get('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5')
    .then(res => console.log(res.data.data.data))
    .catch(error => console.log('Axios fetching error:',error))

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
