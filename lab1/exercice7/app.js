const form = document.querySelector("#guestForm");
const input = document.querySelector("#guest");
const error = document.querySelector("#error");
const guests = document.querySelector("#guests");

form.addEventListener("submit", (event) => {
  // TODO 1 — Stop the page from reloading.
  event.preventDefault();

  // TODO 2 — Read the name from the input and remove the spaces around it.
  const name = input.value.trim();

  // TODO 3 — If the name is empty: show "Please enter a name." in #error and stop (return).
  if (name === "") {
    error.textContent = "Please enter a name.";
    return;
  }

  // TODO 4 — Otherwise:
  //   - empty #error
  //   - create an <li> with the name (textContent) and append it to #guests
  //   - empty the input
  error.textContent = "";

  const li = document.createElement("li");
  li.textContent = name;
  guests.append(li);

  input.value = "";
});

// BONUS 5 — Clicking a guest toggles the class "arrived" on it.
// Use ONE listener on #guests and event.target.closest("li").
guests.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li) {
    li.classList.toggle("arrived");
  }
});