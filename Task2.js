// Set1/Task2.js
// =============================================================================
// Task 2: Command-Line Task Logger — Understanding How Node.js Works & Architecture
// =============================================================================
// -> Comment block explaining, in my own words, how V8 and libuv work together:
//
// Node.js runs JavaScript using Google's V8 engine, which compiles and executes
// our JS code (parses the script, runs functions, manages the call stack and
// heap memory). V8 by itself is synchronous and has no concept of files,
// timers, or networking — it only understands JavaScript.
//
// libuv is a C library that Node uses underneath V8 to provide the event loop,
// a thread pool, and access to OS-level async operations (file I/O, DNS,
// timers, etc.). When our code calls something like fs.readFile, V8 hands
// that request off to libuv. libuv either uses the OS's native async APIs or
// delegates the work to its thread pool, and keeps running the JS call stack
// with V8 in the meantime. Once the file operation finishes, libuv queues the
// callback to run on V8's call stack via the event loop. This is what makes
// Node "non-blocking" even though V8 itself only ever runs one thing at a time.
//
// -> Demonstrate non-blocking behaviour: print a message immediately after
//    triggering fs.readFile, showing it prints BEFORE the file's contents
//    are logged.
// =============================================================================

const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('--- File content (arrives later, via callback) ---');
  console.log(data);
});

console.log('This line prints immediately, BEFORE the file content above — proving fs.readFile does not block the call stack.');

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// This line prints immediately, BEFORE the file content above — proving fs.readFile does not block the call stack.
// --- File content (arrives later, via callback) ---
// Set up project repository
// Review CIA-2 question paper
// ---------------------------------------------------------------------------
