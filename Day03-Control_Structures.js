// Task 1:  Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = -7;
if (num > 0) {
    console.log("Number is +ve")
} else if (num < 0) {
    console.log("Number is -ve")
} else {
    console.log("Number is 0")
}

// Task 2:  Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let personAge = 22;
if(personAge >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Task 3:  Write a program to find the largest of three numbers using nested if-else statements.
let a = 12;
let b = 56;
let c = 6;
if (a > b) {
    if(a > c){
        console.log(a,"is largest number");
    } else {
        console.log(c,"is largest number");
    }
} else {
    if(b > c){
        console.log(b,"is largest number");
    } else {
        console.log(c,"is largest number");
    }
}

//Task 4:  Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Input. Please input a number 1-7");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 75;
switch (score) {
    case score >= 90:
        console.log("A grade")
        break;
    case score >= 80:
        console.log("B grade")
        break;
    case score >= 70:
        console.log("C grade")
        break;
    case score >= 60:
        console.log("D grade")
        break;
    default:
        console.log("F grade")
        break;
}

// Task 6:  Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let isEven = 7;
isEven%2 === 0 ? console.log(isEven,"is Even Number") : console.log(isEven,"is Odd Number");

// Task 7:  Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if((year % 4 === 0 && year % 100 !==0 ) || year % 400 != 0) console.log(year,"is Leap Year");
 else console.log(year,"is Not Leap Year");




