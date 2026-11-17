//  Expected Output

// Before running the code, I expected the output to be:

// Start
// End
// Promise
// Timeout

// ### Actual Output

// After running the code, the actual output matched my prediction:

// Start
// End
// Promise
// Timeout

//  Execution Explanation
// 1.Start is printed first because it is synchronous.
// 2.End is printed next because synchronous code executes before asynchronous callbacks.
// 3.Promise is printed next because its `.then()` callback is a Microtask.
// 4.Timeout is printed last because its callback is a Task (Macrotask).

// JavaScript executes synchronous code first, then processes Microtasks, and finally executes Tasks from the task queue.

// Conclusion: Promise callbacks have higher execution priority than `setTimeout` callbacks when both are waiting after synchronous execution.

//Synchronous
console.log("Start");
//Task / Macrotask
setTimeout(() => {
  console.log("Timeout");
}, 0);
//Microtask
Promise.resolve().then(() => {
  console.log("Promise");
});
//Synchronous
console.log("End");
