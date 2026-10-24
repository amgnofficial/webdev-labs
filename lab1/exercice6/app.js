const value = document.querySelector("#value");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const message = document.querySelector("#message");
const hint = document.querySelector("#hint");
const preview = document.querySelector("#preview");
const chars = document.querySelector("#chars");

let count = 0;

// TODO 1 — When + is clicked: add 1 to count, then show count in #value.
plus.addEventListener("click", () => {
    count++;
    value.textContent = count;
});

// TODO 2 — When − is clicked: subtract 1, but never go below 0. Show count.
minus.addEventListener("click", () => {
    if (count > 0) {
        count--;
        value.textContent = count;
    }
});

// TODO 3 — When Reset is clicked: set count back to 0. Show count.
reset.addEventListener("click", () => {
    count = 0;
    value.textContent = count;
});

// TODO 4 — On every keystroke in #message (the "input" event):
//   - copy the text into #preview
//   - show the length in #chars, for example "5 characters"
message.addEventListener("input", () => {
    const text = message.value;
    preview.textContent = text;
    chars.textContent = `${text.length} characters`;
});

// TODO 5 — When #message gets the focus ("focus" event), show in #hint:
//   "Your message appears below as you type."
// When it loses the focus ("blur" event), empty #hint.
message.addEventListener("focus", () => {
    hint.textContent = "Your message appears below as you type.";
});

message.addEventListener("blur", () => {
    hint.textContent = "";
});