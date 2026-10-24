const meals = [
  { day: "Monday", dish: "Thieboudienne", vegetarian: false },
  { day: "Tuesday", dish: "Ndambé", vegetarian: true },
  { day: "Wednesday", dish: "Yassa poulet", vegetarian: false },
  { day: "Thursday", dish: "Couscous aux légumes", vegetarian: true },
  { day: "Friday", dish: "Mafé", vegetarian: false },
];

const menu = document.querySelector("#menu");
const count = document.querySelector("#count");

// TODO 1 — Create and return ONE <li> for a meal
function createMealItem(meal) {
  const li = document.createElement("li");
  
  // BONUS 4 — Show the day in bold
  const strong = document.createElement("strong");
  strong.textContent = meal.day;
  
  li.append(strong, `: ${meal.dish}`);
  
  if (meal.vegetarian) {
    li.classList.add("veg");
  }
  
  return li;
}

// TODO 2 — Loop over meals and append each item to the #menu list
for (const meal of meals) {
  const item = createMealItem(meal);
  menu.append(item);
}

// TODO 3 — Write in #count: "5 meals · 2 vegetarian"
const vegCount = meals.filter((meal) => meal.vegetarian).length;
count.textContent = `${meals.length} meals · ${vegCount} vegetarian`;