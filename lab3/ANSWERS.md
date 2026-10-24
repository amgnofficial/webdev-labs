# Lab 3 Answers — Asynchronous JavaScript

## Exercise 1 — Understanding Asynchronous Execution

### Part A
1. **Output:** A, C, B
2. **Why:** Synchronous code (`console.log`) runs immediately. The `setTimeout` with a 0ms delay is asynchronous; it is placed in the callback queue and executed only after the call stack of synchronous code is completely empty.
3. **What changes if 1000ms:** The timer `"B"` will wait at least 1 second before being added to the execution queue, while `"A"` and `"C"` still display instantly.

### Part B
1. **Prediction:** 1, 4, 3, 2
2. **Think About It:** The 0ms timer executes after `"4"` because synchronous code always takes priority over asynchronous callback queues, regardless of a short delay.

### Part C
1. **Timeline order:** Start → End → Timer 2 (1000ms) → Timer 1 (2000ms)
2. **Explanation:** Synchronous statements (`Start`, `End`) execute immediately. Among the timers, the one with the shorter delay (1000ms) finishes and gets queued before the longer one (2000ms).


## Exercise 2 — Callbacks and Delayed Work

### Part C — Observe the Problem
1. **Why indentation increases:** Each asynchronous step relies on a callback function passed into the previous one, creating nested structures often referred to as "callback hell".
2. **Ten steps:** The code would become deeply nested, extremely difficult to read, maintain, and debug.
3. **Problem created:** It leads to poor code readability, difficult error handling, and hard-to-manage control flows.

## Exercise 3 — Your First Promises

### Part C — Chain Promises
1. **Why `return wait(1)` is required:** Returning the inner Promise ensures that the subsequent `.then()` method waits for the completion of that specific promise before executing. If we omitted `return`, the next `.then()` would run immediately rather than waiting for the 1-second delay to finish.

## Exercise 4 — Promises and Errors

### Part B — Questions
1. **When does `.then()` run:** It runs only when the Promise resolves successfully (`resolve`).
2. **When does `.catch()` run:** It runs only when the Promise is rejected (`reject`) or encounters an error.
3. **When does `.finally()` run:** It runs unconditionally once the Promise is settled, regardless of whether it succeeded or failed.

## Exercise 5 — Rewrite Promises Using `async/await`

### Part C — Explain the Difference
1. **Which version is easier to read:** The `async/await` version is generally considered much cleaner and easier to read because it allows asynchronous code to be written sequentially, closely mimicking synchronous control flow without requiring nested `.then()` blocks or heavy callback/promise chaining.

## Exercise 6 — Your First `fetch()`

### Part B — Check the Response
1. **What status and ok tell us:** `status` provides the HTTP status code (e.g., `200` for success, `404` for not found), and `ok` is a boolean that is `true` if the status code is in the successful range (200-299).
2. **If requesting a non-existent URL:** The `status` will be `404`, `ok` will be `false`, and the response body will typically be an empty or error page rather than the expected JSON data.

### Part C — Convert to JSON
1. **Why `response.json()` is needed after `fetch()`:** `fetch()` returns a Response object representing the entire HTTP response headers and stream. Parsing the body text into a usable JavaScript array or object via `.json()` is a separate asynchronous operation.

## Exercise 9 — Sequential vs Parallel Requests

### Part B — Questions
1. **Time for sequential version:** It takes approximately 4.5 seconds (the sum of all delays: 2000ms + 1000ms + 1500ms).
2. **Time for parallel version:** It takes approximately 2 seconds (the duration of the longest single request, since they run concurrently).
3. **Why parallel is faster:** Because all asynchronous operations are initiated simultaneously rather than waiting for each preceding one to finish.
4. **Is `Promise.all()` appropriate if `getNews()` depends on `getCourses()`:** No. If an operation depends on the result of a previous one, they must run sequentially.


## Exercise 11 — The Race Condition Challenge
1. **How to prevent old requests from replacing newer results:** You can use an `AbortController` to cancel pending fetch requests when a new search is initiated, or maintain a request counter/timestamp token to ignore responses from older, outdated queries.

## Exercise 12 — Mini Project: Course Dashboard
1. **Implementation:** Successfully combined parallel requests via `Promise.all()`, proper loading/error states, and UI disabling on the dashboard button during data fetching.

---

# Reflection Questions

1. **Difference between `fetch()` and `await fetch()`:** `fetch()` initiates the HTTP request immediately and returns a Promise that resolves to a Response object, whereas `await` pauses the execution of the async function until that Promise settles and returns the actual Response value.
2. **What a Promise represents:** An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
3. **Three states of a Promise:** Pending, Fulfilled, and Rejected.
4. **Why setTimeout(..., 0) logs after C:** Synchronous code (`A` and `C`) runs on the main call stack first. The 0ms timer callback is placed in the callback queue and waits until the call stack is completely empty.
5. **Difference between `.then()` and `await`:** `.then()` attaches a callback to handle a Promise's resolution chain functionally, while `await` allows writing asynchronous code sequentially inside an `async` function, pausing execution linearly without callback chaining.
6. **Why `await response.json()` is needed:** `fetch()` only resolves when headers are received, providing a Response stream. Parsing the body text into a usable JavaScript object or array via `.json()` is a separate asynchronous operation.
7. **Why check `response.ok`:** HTTP errors (like 404 Not Found or 500 Internal Server Error) do not cause a `fetch()` promise to reject; `response.ok` ensures the status code is in the successful 200–299 range.
8. **When to use `Promise.all()`:** When executing multiple independent asynchronous operations concurrently to save time instead of waiting for them sequentially.
9. **Why asynchronous requests create race conditions:** Because network responses can return out of order depending on server latency or network fluctuations, meaning an older request might finish and overwrite a newer one if not explicitly managed.