# Web Development — DAUST Fall 2026

# Lab 1 — JavaScript and the DOM:

Seven small exercises, each focused on **one** topic from Lecture 5. Every exercise gives you a starter file with a few gaps marked `// TODO`. The comment above each TODO tells you what to write and which tool to use. Most TODOs need only 1 to 3 lines.

| # | Topic | You practise |
|---|---|---|
| **1** | Strings | template literals, `trim`, `toLowerCase`, `includes` |
| **2** | Conditionals and loops | `if` / `else if`, the ternary operator, `for`, `for...of` |
| **3** | Arrays of objects | `map`, `filter`, `find`, `reduce`, spread |
| **4** | Selecting and changing elements | `querySelector`, `textContent`, attributes, `classList`, `style`, `value` |
| **5** | Creating elements from data | `createElement`, `append`, `classList.add` |
| **6** | Click, input, focus, and blur | `addEventListener`, updating the page |
| **7** | A form | `submit`, `preventDefault`, reading and checking a value |

---

## Before You Start

Create one folder named `lab1`, with one sub-folder per exercise:

```text
lab1/
├── exercise1/   …   exercise7/
└── ANSWERS.md
```

- Type the starter code into files with the names shown, then fill in **only** the `// TODO` parts.
- Keep **DevTools → Console** (`F12`) open. A red error shows the file and the line number.
- Test after **each** TODO, not at the end.
- Answer the **Think** question of each exercise in `lab1/ANSWERS.md`, in 1 or 2 sentences.

Exercises 1 to 3 run in the Console only. Each uses this `index.html`, with only the title changed:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exercise 1</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Open the Console (F12)</h1>
</body>
</html>
```

At the top of their `app.js` is a small `check` helper. It prints ✔ when your function returns the expected value, and ✘ (with what it got) when it does not. **Goal: all ✔.**

---

## Exercise 1 — Strings

**exercise1/app.js**

```js
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

// TODO 1 — Return the full name, for example "Awa Diop". Use a template literal.
function fullName(first, last) {
  return `${first} ${last}`;
}

// TODO 2 — Return the initials, for example "A.D."
// Hint: the first letter of a string is text[0].
function initials(first, last) {
  return '${first[0]} ${last[0]};
}

// TODO 3 — Clean an email that a user typed: remove the spaces around it (trim)
// and turn it into lowercase (toLowerCase).
function cleanEmail(text) {
  return text.trim().toLowerCase();

}

// TODO 4 — Return true if the text contains "@", false otherwise (includes).
function hasAt(text) {
 return text.includes("@")
}

// ---------- Do not change ----------
check("fullName",   fullName("Awa", "Diop"), "Awa Diop");
check("initials",   initials("Awa", "Diop"), "A.D.");
check("cleanEmail", cleanEmail("  Awa.Diop@DAUST.org "), "awa.diop@daust.org");
check("hasAt yes",  hasAt("awa@daust.org"), true);
check("hasAt no",   hasAt("awa.daust.org"), false);
```

**Think.** `cleanEmail` returns a new string. After `const e = " A@B.org "; cleanEmail(e);`, what is the value of `e`? Why?
It stays the same because cleanEmail only copies what's inside the variable but don't overwrite it
---

## Exercise 2 — Conditionals and Loops

**exercise2/app.js**

```js
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

// TODO 1 — Return a letter for a grade out of 20 with if / else if / else:
//   16 or more → "A",  14 or more → "B",  12 or more → "C",  10 or more → "D",  otherwise "F"
function letter(grade) {
  if (grade >= 16) {
    return "A";
  } else if (grade >= 14) {
    return "B";
  } else if (grade >= 12) {
    return "C";
  } else if (grade >= 10) {
    return "D";
  } else {
    return "F";
  }
}

// TODO 2 — Return "Pass" if the grade is 10 or more, "Fail" otherwise.
// Use the ternary operator ( condition ? a : b ) in ONE line.
function status(grade) {
  return grade >= 10 ? "Pass" : "Fail";
}

// TODO 3 — Return the sum of the numbers. Use for...of and a variable declared with let.
function sum(numbers) {
  let total=0;
  for()

}

// TODO 4 — Return HOW MANY grades are 10 or more. Use for...of and if.
function countPassed(grades) {

}

// TODO 5 — Return an array counting down from n to 1, for example countdown(3) → [3, 2, 1].
// Use a classic for loop ( for (let i = …; …; …) ) and push.
function countdown(n) {

}

// ---------- Do not change ----------
check("letter A",    letter(17), "A");
check("letter B",    letter(14), "B");
check("letter D",    letter(10), "D");
check("letter F",    letter(9.5), "F");
check("status",      [status(10), status(9)], ["Pass", "Fail"]);
check("sum",         sum([4, 6, 10]), 20);
check("countPassed", countPassed([8, 12, 10, 15, 3]), 3);
check("countdown",   countdown(3), [3, 2, 1]);
```

**Think.** In TODO 1, what goes wrong if you test `grade >= 10` **first**? Try it with `letter(17)`.

---

## Exercise 3 — Arrays of Objects

**exercise3/app.js**

```js
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

const products = [
  { name: "Mango",   price: 500, stock: 12 },
  { name: "Bissap",  price: 300, stock: 0 },
  { name: "Bread",   price: 150, stock: 30 },
  { name: "Thiakry", price: 700, stock: 5 },
];

// TODO 1 — Return an array with only the names. Use map.
function names(list) {

}

// TODO 2 — Return only the products whose stock is above 0. Use filter.
function inStock(list) {

}

// TODO 3 — Return the product with this name (or undefined). Use find.
function findProduct(list, name) {

}

// TODO 4 — Return the value of the whole stock: the sum of price × stock.
// Use reduce, starting from 0.
function stockValue(list) {

}

// TODO 5 — Return a NEW product with a new price. Do not change the original:
// use the spread syntax { ...product, … }.
function withPrice(product, newPrice) {

}

// ---------- Do not change ----------
check("names",           names(products), ["Mango", "Bissap", "Bread", "Thiakry"]);
check("inStock",         names(inStock(products)), ["Mango", "Bread", "Thiakry"]);
check("findProduct",     findProduct(products, "Bread").price, 150);
check("stockValue",      stockValue(products), 14000);
check("withPrice",       withPrice(products[0], 600).price, 600);
check("original intact", products[0].price, 500);
```

**Think.** Why does `withPrice` need the spread syntax? What would happen to `products[0]` if you wrote `product.price = newPrice; return product;`?

---

## Exercise 4 — Selecting and Changing Elements

**exercise4/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exercise 4</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <h1 id="title">Old title</h1>
  <p class="intro">This sentence will change.</p>
  <a id="link" href="#">A link</a>
  <div class="box">A box</div>
  <label for="nameField">Your name</label>
  <input id="nameField" value="Awa">
  <p id="output"></p>
</body>
</html>
```

**exercise4/style.css**

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
.box { padding: 1rem; margin: 1rem 0; border: 2px solid #1a5276; width: 200px; }
.highlight { background: gold; }
```

**exercise4/app.js**

```js
// TODO 1 — Change the text of the h1 (#title) to "JavaScript changed me!"


// TODO 2 — Change the text of the paragraph with class "intro" to
// "This sentence was changed by app.js."  (careful: . for a class, # for an id)


// TODO 3 — Make the link (#link) point to https://developer.mozilla.org
// and change its text to "Go to MDN".


// TODO 4 — Add the class "highlight" to the box (classList),
// and give it rounded corners with style.borderRadius = "12px".


// TODO 5 — Read the value of #nameField and write "Hello, Awa!" in #output.
// (It must use the field's value: change value="Awa" in the HTML and reload to test.)
```

**Done when** the title, the sentence, and the link have changed, the link opens MDN, the box is gold with rounded corners, and the greeting uses the name in the field.

**Think.** In TODO 1, try `"title"` without the `#`. The `<h1>` does not change, but look at the browser tab. Which element did `querySelector` find, and why?

---

## Exercise 5 — Creating Elements From Data

**exercise5/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exercise 5</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Cafeteria — Menu of the Week</h1>
  <ul id="menu"></ul>
  <p id="count"></p>
</body>
</html>
```

**exercise5/style.css**

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
li { padding: 0.4rem 0; }
.veg { color: #1e8449; font-weight: 600; }
.veg::after { content: " 🌱"; }
```

**exercise5/app.js**

```js
const meals = [
  { day: "Monday",    dish: "Thieboudienne",        vegetarian: false },
  { day: "Tuesday",   dish: "Ndambé",               vegetarian: true },
  { day: "Wednesday", dish: "Yassa poulet",         vegetarian: false },
  { day: "Thursday",  dish: "Couscous aux légumes", vegetarian: true },
  { day: "Friday",    dish: "Mafé",                 vegetarian: false },
];

const menu  = document.querySelector("#menu");
const count = document.querySelector("#count");

// TODO 1 — Create and return ONE <li> for a meal:
//   - its text is "Monday: Thieboudienne"   (createElement + textContent)
//   - if the meal is vegetarian, add the class "veg"
function createMealItem(meal) {

}

// TODO 2 — Loop over meals (for...of) and append each item to the #menu list.


// TODO 3 — Write in #count: "5 meals · 2 vegetarian"
// Hint: meals.length, and filter(...).length for the vegetarian ones.


// BONUS 4 — Show the day in bold: inside the li, create a <strong> for the day,
// and append the strong and then the text ": dish" to the li.
```

**Done when** five meals are listed, the two vegetarian meals are green with 🌱, and the count line is correct.

**Think.** Add a sixth meal to the `meals` array, without touching the HTML. What changes on the page, and why is building the page from data useful?

---

## Exercise 6 — Click, Input, Focus, and Blur

**exercise6/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exercise 6</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <h2>Counter</h2>
  <p id="value">0</p>
  <button id="minus" type="button">−</button>
  <button id="plus" type="button">+</button>
  <button id="reset" type="button">Reset</button>

  <h2>Live Message</h2>
  <label for="message">Type a message</label>
  <input id="message">
  <p id="hint"></p>
  <p id="preview"></p>
  <small id="chars">0 characters</small>
</body>
</html>
```

**exercise6/style.css**

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
#value { font-size: 3rem; margin: 0.5rem 0; }
#hint { color: #555; font-style: italic; min-height: 1.2em; }
#preview { font-size: 1.5rem; color: #1a5276; min-height: 1.5em; }
```

**exercise6/app.js**

```js
const value   = document.querySelector("#value");
const minus   = document.querySelector("#minus");
const plus    = document.querySelector("#plus");
const reset   = document.querySelector("#reset");
const message = document.querySelector("#message");
const hint    = document.querySelector("#hint");
const preview = document.querySelector("#preview");
const chars   = document.querySelector("#chars");

let count = 0;

// TODO 1 — When + is clicked: add 1 to count, then show count in #value.


// TODO 2 — When − is clicked: subtract 1, but never go below 0. Show count.


// TODO 3 — When Reset is clicked: set count back to 0. Show count.


// TODO 4 — On every keystroke in #message (the "input" event):
//   - copy the text into #preview
//   - show the length in #chars, for example "5 characters"


// TODO 5 — When #message gets the focus ("focus" event), show in #hint:
//   "Your message appears below as you type."
// When it loses the focus ("blur" event), empty #hint.
```

**Done when** the counter goes up, down (never below 0), and back to 0; the preview and the character count follow your typing; and the hint appears only while the field has the focus.

**Think.** Suppose you move the code of TODO 1 into a function `addOne()`, and then write `plus.addEventListener("click", addOne());` with parentheses. What happens, and why? (Lecture 5 §27)

---

## Exercise 7 — A Form

**exercise7/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exercise 7</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Guest List</h1>
  <form id="guestForm">
    <label for="guest">Guest name</label>
    <input id="guest">
    <button>Add</button>
  </form>
  <p id="error"></p>
  <ul id="guests"></ul>
</body>
</html>
```

**exercise7/style.css**

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
#error { color: crimson; min-height: 1.2em; }
li { cursor: pointer; }
.arrived { text-decoration: line-through; color: gray; }
```

**exercise7/app.js**

```js
const form   = document.querySelector("#guestForm");
const input  = document.querySelector("#guest");
const error  = document.querySelector("#error");
const guests = document.querySelector("#guests");

form.addEventListener("submit", (event) => {
  // TODO 1 — Stop the page from reloading.


  // TODO 2 — Read the name from the input and remove the spaces around it.


  // TODO 3 — If the name is empty: show "Please enter a name." in #error and stop (return).


  // TODO 4 — Otherwise:
  //   - empty #error
  //   - create an <li> with the name (textContent) and append it to #guests
  //   - empty the input


});

// BONUS 5 — Clicking a guest toggles the class "arrived" on it.
// Use ONE listener on #guests and event.target.closest("li").
```

**Done when** names are added with the button **and** with the Enter key, the page never reloads, an empty name (or only spaces) shows the error, and the error disappears after a valid name.

**Think.** Comment out TODO 1 and submit a name. What happens to the page and to your list? Why?

---

## Deliverables

```text
lab1/
├── exercise1/   index.html  app.js
├── exercise2/   index.html  app.js
├── exercise3/   index.html  app.js
├── exercise4/   index.html  style.css  app.js
├── exercise5/   index.html  style.css  app.js
├── exercise6/   index.html  style.css  app.js
├── exercise7/   index.html  style.css  app.js
└── ANSWERS.md   the seven Think answers
```

Keep the `lab1` folder. In **Lab 2 — Git and GitHub** you will put it under version control, publish it on GitHub, and submit it from there.
