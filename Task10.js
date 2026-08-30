// Set1/Task10.js
// =============================================================================
// Task 10: Command-Line Task Logger — JavaScript Promises
// =============================================================================
// -> Rewrite saveTaskCallback from Task 8 as a Promise-based function
//    saveTaskPromise(task) using fs.promises.appendFile.
// -> Chain .then() and .catch() to log success or failure when calling
//    saveTaskPromise.
// =============================================================================

const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;
const TASKS_FILE = path.join(__dirname, 'tasks.txt');

function saveTaskPromise(task) {
  return fsPromises.appendFile(TASKS_FILE, task + '\n');
}

saveTaskPromise('Finish CIA-2 assignment')
  .then(() => {
    console.log('Saved (promise): "Finish CIA-2 assignment"');
  })
  .catch((err) => {
    console.error('Failed to save task (promise):', err.message);
  });

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// Saved (promise): "Finish CIA-2 assignment"
//
// (and the line "Finish CIA-2 assignment" is appended to tasks.txt on disk)
// ---------------------------------------------------------------------------
