// Day 8: ES6+ Features
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
// Tasks/Activities:
// Activity 1: Template Literals
// - Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
var personName = "ALi";
var personAge = 23;
var lit = "".concat(personName, " is ").concat(personAge, " years old");
console.log(lit);
// - Task 2: Create a multi-line string using template literals and log it to the console.
var para = "\nJavaScript is a cross-platform, object-oriented scripting language \nused to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).\nThere are also more advanced server side versions of JavaScript such as Node.js,\nwhich allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).\nInside a host environment (for example, a web browser),\nJavaScript can be connected to the objects of its environment to provide programmatic control over them.\n";
console.log(para);
// Activity 2: Destructuring
// - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
var numArr2 = [1, 2, 3, 4, 5, 6];
var a = numArr2[0], b = numArr2[1], c = numArr2[2], d = numArr2[3], e = numArr2[4], f = numArr2[5];
console.log("first element:", a, "last:", f);
// - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
var bookD = {
    title: "Clean Code",
    author: "Robert Cecil Martin",
    published: 2012,
};
var author = bookD.author, title = bookD.title;
console.log("title:", title, "& author:", author);
// Activity 3: Spread and Rest Operators
// - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
var newNumArr2 = __spreadArray(__spreadArray([], numArr2, true), [101, 102, 203, 304], false);
// - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
var restSum = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, arg_1 = arg; _a < arg_1.length; _a++) {
        var val = arg_1[_a];
        sum += val;
    }
    return sum;
};
console.log(restSum(1, 2, 3, 4, 5));
// Activity 4: Default Parameters
// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiplyNum(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
console.log(multiplyNum(5, 5));
console.log(multiplyNum(5));
// Activity 5: Enhanced Object Literals
// - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
var Title = "Example Title";
var Author = "Author Name";
var Year = 2021;
var bookk = (_a = {
        Title: Title,
        Author: Author,
        Year: Year,
        getDetails: function () {
            return "".concat(this.Title, " by ").concat(this.Author);
        }
    },
    _a["publishedYear"] = Year,
    _a);
console.log(bookk);
// - Task 9: Create an object with computed property names based on variables and log the object to the console.
var propName1 = "title";
var propName2 = "author";
var propName3 = "year";
var book = (_b = {},
    _b[propName1] = "Code Complete",
    _b[propName2] = "Steve McConnell,",
    _b[propName3] = 1993,
    _b.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author);
    },
    _b);
console.log(book);
console.log(book.getDetails());
