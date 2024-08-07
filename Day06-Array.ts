// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const numArr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15];
console.log(numArr1);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("1st element: ", numArr1[0], "last element:", numArr1[numArr1.length-1]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numArr1.push(16);
console.log("array after puch:", numArr1);
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numArr1.pop();
console.log("array after pop:", numArr1);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numArr1.shift();
console.log("shift array:", numArr1);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numArr1.unshift(101);
console.log("unshipted Array", numArr1);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let numArr2: number[] = numArr1.map((x) => x * 2);
console.log(numArr2);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let EvenArr: number[] = numArr1.filter((x) => x % 2 == 0);
console.log('even:',EvenArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
    const summ:number = numArr1.reduce((prevValue,currentValue) => prevValue+currentValue)
    console.log('sum',summ);
    
// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numArr1.length; i++) {
    console.log(numArr1[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numArr1.forEach(num => console.log(num))

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
    const matrix = [[1,0,0],[0,1,0],[0,0,1]]
    console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log('mid element of matrix',matrix[1][1]);

