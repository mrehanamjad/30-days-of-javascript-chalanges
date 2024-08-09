// Day 10: Event Handling
//    Tasks/Activities:
var _a, _b, _c;
//    Activity 1: Basic Event Handling
//     Task 1: Add a click event listener to a button that changes the text content of a paragraph.
var task1El = document.querySelector("#task1");
(_a = document.querySelector("#btn1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    task1El.textContent = "Task 1: Completed";
});
//     Task 2: Add a double-click event listener to an image that toggles its visibility.
var task2El = document.querySelector("#task2");
var i = 0;
task2El.addEventListener("dblclick", function () {
    if (i == 0) {
        task2El.style.opacity = "0.2";
        i = 1;
    }
    else {
        task2El.style.opacity = "1";
        i = 0;
    }
});
//    Activity 2: Mouse Events
//     Task 3: Add a mouseover event listener to an element that changes its background color.
(_b = document.querySelector("#task3")) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseover', function (e) {
    var el = e.target;
    el.style.backgroundColor = "lightblue";
});
//     Task 4: Add a mouseout event listener to an element that resets its background color.
(_c = document.querySelector("#task3")) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseout', function (e) {
    var el = e.target;
    el.style.backgroundColor = "blue";
});
//    Activity 3: Keyboard Events
//     Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
var inputField = document.querySelector("#inputField");
inputField === null || inputField === void 0 ? void 0 : inputField.addEventListener('keydown', function (e) {
    console.log("Key pressed: ".concat(e.key));
});
//     Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
var inputField2 = document.querySelector("#inputField2");
inputField2 === null || inputField2 === void 0 ? void 0 : inputField2.addEventListener('keyup', function (e) {
    var p = inputField2 === null || inputField2 === void 0 ? void 0 : inputField2.nextElementSibling;
    p.textContent = "Current value: ".concat(inputField2.value);
});
//    Activity 4: Form Events
//     Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
//     Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
//    Activity 5: Event Delegation
//     Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
//     Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
