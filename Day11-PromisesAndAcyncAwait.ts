// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises
// - Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

console.log("start...");

const tsk1 = new Promise<string>((resolve, reject) => {
setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
}, 2000);
});

tsk1.then((message) => {
console.log(message);
});

// - Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const tsk2 = new Promise<string>((resolve, reject) => {
setTimeout(() => {
    reject("Promise  rejected after 2 seconds");
}, 2000);
});

tsk2
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error("Promise rejected with error:", error);
});

// Activity 2: Chaining Promises
// - Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchServer = (n: number): Promise<string> => {
return new Promise<string>((res, rej) => {
    setTimeout(() => {
    res(`Data fected ${n}`);
    }, 2000);
});
};
fetchServer(1)
.then((res) => {
    console.log("___R_: ", res);
    return fetchServer(2);
})
.then((res) => {
    console.log("___R_: ", res);
    return fetchServer(3);
})
.then((res) => {
    console.log("___R_: ", res);
    return fetchServer(4);
})
.then((res) => {
    console.log("___R_: ", res);
    return fetchServer(5);
})
.then((res) => {
    console.log("___R_: ", res);
})
.catch((err) => {
    console.log("___E_: ", err);
})
.finally(() => {
    console.log("completed!");
});

// Activity 3: Using Async/Await
// - Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const tsk4 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise resolved task 4");
    }, 2000);
});

async function tsk4Async() {
    try {
        let res = await tsk4
        console.log(res);

    } catch (error) {
        console.log(error);

    }
}
tsk4Async()

// - Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const tsk5 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise resolved task 4");
    }, 2000);
});

async function tsk5Async() {
    try {
        let res = await tsk5
        console.log(res);

    } catch (error) {
        console.log('Rejected: ',error);

    }
}
tsk5Async()

// Activity 4: Fetching Data from an API
// - Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

type Data = {
  categories: string[];
  id: number;
  content: string;
};

type Res = {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: Data;
};

fetch('https://api.freeapi.app/api/v1/public/randomjokes')
.then((res: Response) => res.json())
.then((res:Res) => console.log(res.data))
.catch((error: Error) => console.log('Error in fetching:', error));

// - Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function tsk6FetchApi() {
    try {
        const res: Response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes')
        const data:Res = await res.json();
        console.log(data.data);
    } catch (error) {
        console.log("fetching api error ::",error);
    }

}
tsk6FetchApi()

// Activity 5: Concurrent Promises
// - Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const promise2 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1000)
);
const promise3 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 1500)
);

Promise.all([promise1, promise2, promise3])
.then((results: string[]) => {
    console.log("All promises resolved:", results);
  })
.catch((error) => {
    console.error("One of the promises rejected:", error);
  });

// - Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
  .then((result: string) => {
    console.log("Promise resolved:", result);
  })
  .catch((error: string) => {
    console.error("Promise rejected:", error);
  });
