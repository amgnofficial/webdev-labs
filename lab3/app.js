
function delay(message, seconds, callback) {
  setTimeout(() => {
    console.log(message);
    if (callback) {
      callback();
    }
  }, seconds * 1000);
}


delay("Step 1", 1, () => {
  delay("Step 2", 1, () => {
    delay("Step 3", 1, () => {
      console.log("Done!");
    });
  });
});

// Partie A & B 
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Two seconds have passed!");
    }, seconds * 1000);
  });
}

// Test de la Partie B
wait(2).then((message) => {
  console.log(message);
});

// Partie C 
console.log("Start");

wait(1)
  .then(() => {
    console.log("1 second");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds");
  });

  // Partie A & B
function checkServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Server is online");
      } else {
        reject("Server is unavailable");
      }
    }, 1000);
  });
}

checkServer()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request finished.");
  });

  // Partie A & B 
async function runSteps() {
  try {
    await wait(1);
    console.log("Async Step 1");

    await wait(1);
    console.log("Async Step 2");

    await wait(1);
    console.log("Async Step 3");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

runSteps();

// Exercise 6 
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // Partie B 
    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    // Partie C 
    const users = await response.json();
    console.log("Users data:", users);

  } catch (error) {
    console.error("Error:", error);
  }
}

loadUsers();

const statusElement = document.querySelector("#status");
const userList = document.querySelector("#users");

function renderUsers(users) {
  userList.innerHTML = ""; 
  users.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    userList.appendChild(li);
  });
}

async function loadAndRenderUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    renderUsers(users);
    statusElement.textContent = "Users loaded successfully";
  } catch (error) {
    statusElement.textContent = "Could not load users.";
    console.error(error);
  }
}

loadAndRenderUsers();

// Exercise 8 — Loading and Error States
async function loadUsersWithStates() {
  const statusEl = document.querySelector("#status");
  const listEl = document.querySelector("#users");

  statusEl.textContent = "Loading...";
  listEl.innerHTML = "";

  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const users = await response.json();
    
    renderUsers(users);
    statusEl.textContent = "Users loaded successfully";

  } catch (error) {
    statusEl.textContent = "Could not load users.";
    console.error(error);
  } finally {
  }
}

// Lancer la fonction
loadUsersWithStates();

// Fonctions d'assistance fournies par le lab
function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Courses loaded");
    }, 2000);
  });
}

function getNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("News loaded");
    }, 1000);
  });
}

function getEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Events loaded");
    }, 1500);
  });
}

// Partie A 
async function loadSequentially() {
  console.time("sequential");

  const courses = await getCourses();
  const news = await getNews();
  const events = await getEvents();

  console.log(courses);
  console.log(news);
  console.log(events);

  console.timeEnd("sequential");
}

// Partie B
async function loadInParallel() {
  console.time("parallel");

  const [courses, news, events] = await Promise.all([
    getCourses(),
    getNews(),
    getEvents()
  ]);

  console.log(courses);
  console.log(news);
  console.log(events);

  console.timeEnd("parallel");
}

loadSequentially();
loadInParallel();

const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
const statusEl = document.querySelector("#status");
const resultsEl = document.querySelector("#results");

function renderUsers(users) {
  resultsEl.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    resultsEl.appendChild(li);
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  statusEl.textContent = "Searching...";
  resultsEl.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const users = await response.json();

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredUsers.length === 0) {
      statusEl.textContent = "No users found.";
    } else {
      statusEl.textContent = "";
      renderUsers(filteredUsers);
    }

  } catch (error) {
    statusEl.textContent = "Could not load users.";
    console.error(error);
  }
});