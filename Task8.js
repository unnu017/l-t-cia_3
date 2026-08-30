// Set1/Task8.js
// =============================================================================
// Task 8: Command-Line Task Logger — Asynchronous Programming & Callback Functions
// =============================================================================
// -> Write a function saveTaskCallback(task, callback) that appends the task
//    to tasks.txt using fs.appendFile with an error-first callback.
// -> Call saveTaskCallback and log a success or failure message inside the
//    callback.
// =============================================================================

const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

function saveTaskCallback(task, callback) {
  fs.appendFile(TASKS_FILE, task + '\n', (err) => {
    if (err) {
      callback(err); // error-first: error is always the first argument
    } else {
      callback(null);
    }
  });
}

saveTaskCallback('Finish CIA-2 assignment', (err) => {
  if (err) {
    console.error('Failed to save task (callback):', err.message);
  } else {
    console.log('Saved (callback): "Finish CIA-2 assignment"');
  }
});

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// Saved (callback): "Finish CIA-2 assignment"
//
// (and the line "Finish CIA-2 assignment" is appended to tasks.txt on disk)
// ---------------------------------------------------------------------------
