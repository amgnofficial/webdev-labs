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
return `${first[0]}.${last[0]}.`
}
// TODO 3 — Clean an email that a user typed: remove the spaces around it (trim)
// and turn it into lowercase (toLowerCase).
function cleanEmail(text) {
  return text.trim().toLowerCase();
}

// TODO 4 — Return true if the text contains "@", false otherwise (includes).
function hasAt(text) {
  if (text.includes("@")) {
    return true;
  } else {
    return false;
  }
}

// ---------- Do not change ----------
check("fullName", fullName("Awa", "Diop"), "Awa Diop");
check("initials", initials("Awa", "Diop"), "A.D.");
check("cleanEmail", cleanEmail("  Awa.Diop@DAUST.org "), "awa.diop@daust.org");
check("hasAt yes", hasAt("awa@daust.org"), true);
check("hasAt no", hasAt("awa.daust.org"), false);