function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

const products = [
  { name: "Mango", price: 500, stock: 12 },
  { name: "Bissap", price: 300, stock: 0 },
  { name: "Bread", price: 150, stock: 30 },
  { name: "Thiakry", price: 700, stock: 5 },
];

// TODO 1 — Return an array with only the names. Use map.
function names(list) {
    return list.map((product) => product.name);
}

// TODO 2 — Return only the products whose stock is above 0. Use filter.
function inStock(list) {
    return list.filter((product) => product.stock > 0);
}

// TODO 3 — Return the product with this name (or undefined). Use find.
function findProduct(list, name) {
    return list.find((product) => product.name === name);
}

// TODO 4 — Return the value of the whole stock: the sum of price × stock.
// Use reduce, starting from 0.
function stockValue(list) {
    return list.reduce((total, product) => total + (product.price * product.stock), 0);
}

// TODO 5 — Return a NEW product with a new price. Do not change the original:
// use the spread syntax { ...product, … }.
function withPrice(product, newPrice) {
    return { ...product, price: newPrice };
}

// ---------- Do not change ----------
check("names", names(products), ["Mango", "Bissap", "Bread", "Thiakry"]);
check("inStock", names(inStock(products)), ["Mango", "Bread", "Thiakry"]);
check("findProduct", findProduct(products, "Bread").price, 150);
check("stockValue", stockValue(products), 14000);
check("withPrice", withPrice(products[0], 600).price, 600);
check("original intact", products[0].price, 500);