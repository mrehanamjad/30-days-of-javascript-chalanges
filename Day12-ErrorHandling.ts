// //    Day 12: Error Handling

// //    Activity 1: Basic Error Handling with Try-Catch
// //     Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError(): void {
  throw new Error("This is an intentional error");
}

try {
  throwError();
} catch (error) {
  if (error instanceof Error)
    console.error(`An error occurred: ${error.message}`);
  else console.error("An unknown error occurred.");
}

// //     Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divides = (a: number, b: number): number => {
  if (b === 0) throw new Error("Denominator can not be Zero");
  else return a / b;
};
try {
  console.log(divides(2, 0));
} catch (error) {
  if (error instanceof Error) console.log("Task 2 error ::", error.message);
}

// //    Activity 2: Finally Block
// //     Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  console.log(a);
} catch (error) {
  if (error instanceof Error)
    console.log("Intensional error Task 3 :: ", error.message);
} finally {
  console.log("this is Finally for Task 3");
}

// //    Activity 3: Custom Error Objects
// //     Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

function custErr() {
  throw new CustomError("This is a custom error");
}

try {
  custErr();
} catch (error: unknown) {
  // Use unknown to handle errors explicitly
  if (error instanceof CustomError) {
    console.log("Caught CustomError:", error.message);
  } else {
    console.log("Caught an unexpected error");
  }
} finally {
  console.log("Execution complete.");
}

//     Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class validationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

function chechValidation(txt: string) {
  if (txt.trim.length == 0) throw new validationError("field cannot be empty");
  return txt;
}

try {
  const mess = chechValidation(" this ");
  console.log(mess);
} catch (error) {
  if (error instanceof validationError)
    console.log(`Validation error :: ${error.message}`);
  else console.log("its an unknown error");
}

//    Activity 4: Error Handling in Promises

//     Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const d12Promise = new Promise<string>((res, rej) => {
    const random = Math.random();
    if(random > 0.5) res('Promise Resolved (task 6)')
    else rej("Error ~ Promise Rejected (task 6)");
});

d12Promise
.then((res)=> console.log(res))
.catch(rej => console.log(rej))

//     Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const d12PromiseA = new Promise<string>((res, rej) => {
    const random = Math.random();
    if(random > 0.5) res('Promise Resolved (task 7)')
    else rej("Error ~ Promise Rejected (task 7)");
});

(async () => {
    try {
        const res = await d12PromiseA;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})()

//    Activity 5: Graceful Error Handling in Fetch
//     Task 8: Use the fetch Api to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://api.com/wrongurl')
.then(data => console.log(data))
.catch(err => console.log("Error in fetch :: ",err))

//     Task 9: Use the fetch Api to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchErr(){
        try {
        const data = await fetch('https://api.com/wrongurl')
            console.log(data);
            
        } catch (err) {
            console.log("Error in fetch :: ",err)
        }
}
fetchErr()
