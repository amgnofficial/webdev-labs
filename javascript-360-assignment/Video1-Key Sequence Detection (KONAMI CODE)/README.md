# Project: Key Detection & Secret Code


The exercice was a JavaScript application that listens for global keyboard input (`keyup` events), tracks a rolling buffer of recent keystrokes, and triggers a fun visual effect  when a specific secret word ("wesbos") is typed.

## Features
- **Global Event Listener:** Captures keyboard events across the entire window.
- **Sliding Window Array Management:** Uses `Array.prototype.push()` and `Array.prototype.splice()` to keep only the necessary number of recent keystrokes in memory.
- **String Matching:** Converts the array into a string using `.join('')` and verifies it with `.includes()`.
- **External Integration:** Dynamically injects elements using the Cornify library upon successful code entry.

## What I Learned
- How to efficiently capture and handle keyboard events in modern JavaScript.
- Managing array length dynamically to compare incoming input streams against a fixed target string.
- The utility of combining `.push()`, `.splice()`, `.join()`, and `.includes()` for pattern matching.