// Task 1:  Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Task 2:  Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i, "x 5 =", i * 5);
}

//Task 3:  Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let n = 1;
while (n < 11) {
  sum += n;
  n++;
}
console.log("Sum of numbers from 1 to 10 :", sum);

// Task 4:  Write a program to print numbers from 10 to 1 using a while loop.
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num = 5;
let factorial;
do {
  if (num === 0 && num === 1) factorial = 1;
  else factorial = num * num - 1;
  num--;
} while (num > 1);
console.log("factorial of given number is :", num);

// Task 7:  Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let r = "";
  for (let j = 0; j <= i; j++) {
    r += "* "
  }
  console.log(r);
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i < 11; i++) {
  if (i === 5) continue;
  console.log(i);
}
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i < 11; i++) {
  console.log(i);
  if (i === 5) break;
}
