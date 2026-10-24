# Lab 1 — Answers

## Exercise 1
`cleanEmail` returns a new modified string without altering the original variable `e`. In JavaScript, strings are immutable, meaning methods like `trim()` or `toLowerCase()` always return a new string instance rather than modifying the original in place.

## Exercise 2
If you test `grade >= 10` first, a grade like 17 will match that first condition and incorrectly return "D" (or the first matched tier) instead of "A", because 17 is also greater than 10. Conditions must be checked in strict descending order from highest to lowest.

## Exercise 3
`withPrice` needs the spread syntax (`{ ...product, price: newPrice }`) to create a brand-new object copy with the updated price, ensuring immutability. If you wrote `product.price = newPrice; return product;`, it would directly mutate the original object in the `products` array, which breaks data integrity and causes unintended side effects.

## Exercise 4
If you write `"title"` without the `#`, `querySelector` looks for an HTML tag named `<title>` (which lives inside the `<head>` of the document). Therefore, it changes the text of the browser tab rather than the `<h1>` heading on the page body.

## Exercise 5
`createElement` generates a DOM node directly in memory without interacting with the live webpage, which is efficient and safe from injection attacks. `innerHTML` parses a raw HTML string and overwrites existing elements, which can cause performance overhead and security vulnerabilities (such as Cross-Site Scripting) if rendering unvalidated dynamic data.

## Exercise 6
If you write `plus.addEventListener("click", addOne());` with parentheses, `addOne()` executes immediately when the script loads rather than waiting for a click. It passes the return value (usually `undefined`) as the event listener callback, meaning nothing happens when you click the button. You must pass a reference to the function without parentheses (`addOne`) or use an arrow function wrapper (`() => addOne()`).

## Exercise 7
If you comment out `event.preventDefault()` and submit a name, the browser performs its default form submission behavior, which triggers a full page reload and resets the state. As a result, the newly added guest disappears from the list instantly, and any console logs or dynamic states are cleared.
