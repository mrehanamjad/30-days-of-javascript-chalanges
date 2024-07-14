// Day 2 tasks:

let num1 = 10;
let num2 = 3;

// Task 1: Write a program to add two numbers and log the result to the console
console.log(`${num1} + ${num2} = ${num1 + num2}`); // 10 + 3 = 13

// Task 2: Write a program to Subtract two numbers and log the result to the console
console.log(`${num1} - ${num2} = ${num1 - num2}`); // 10 - 3 = 7

// Task 3: Write a program to Multiply two numbers and log the result to the console
console.log(`${num1} x ${num2} = ${num1 * num2}`); // 10 x 3 = 30

// Task 4: Write a program to Divide two numbers and log the result to the console
console.log(`${num1} / ${num2} = ${num1 / num2}`); // 10 / 3 = 3.3333333333333335

// Task 5: Write a program to find the remindor when one number is divided by another number and log the result to the console
console.log(`Reminder for ${num1} / ${num2} = ${num1 % num2}`); // Reminder for 10 / 3 = 1

// Task 6: use the +=  operator to add a number to a variable and log the result to the console.

num1 += 10 // num1 = 20
console.log(`num1 += 10 = ${num1}`) // num1 += 10 = 20

// Task 6: use the -=  operator to add a number to a variable and log the result to the console.
num1 -= 5 // num 1 = 15
console.log(`num1 -= 10 = ${num1}`) // num1 -= 10 = 15

// Task 8: Write a program to compare two numbers using < and > and log the result to the console.
console.log(`${num1} > ${num2} = ${num1 > num2}`); // 15 > 3 = true
console.log(`${num1} < ${num2} = ${num1 < num2}`); //15 < 3 = false

// Task 9: Write a program to compare two numbers using  <= and >= and log the result to the console.
console.log(`${num1} >= ${num2} = ${num1 >= num2}`); // 15 >= 3 = true
console.log(`${num1} <= ${num2} = ${num1 <= num2}`); // 15 <= 3 = false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
num1 = 8
num2 = '8'
console.log(`${num1} == ${num2} = ${num1 == num2}`); // 8 == 8 = true
console.log(`${num1} === ${num2} = ${num1 === num2}`); // 8 === 8 = false

// Task 11:  Write a program that uses the &&  operator to combine two conditions and log the result to the console.
num1 = 9
num2 = 12
console.log(num1 === 9 && num1 === 15); // false

// Task 12:  Write a program that uses the ||  operator to combine two conditions and log the result to the console.
console.log(num1 === 9 || num1 === 15); // true

// Task 13:  Write a program that uses the !  operator to negate a conditions and log the result to the console.
console.log(num1 != 10); // true

// Task 14 :  Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
num1 > 0 ? console.log("number is Positive") : console.log("number is Negative"); // number is Positive
