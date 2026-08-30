// Set1/Task3.js
// =============================================================================
// Task 3: Command-Line Task Logger — NodeJS Resources & Working with Examples
// =============================================================================
// -> fs module methods used in this project (as required by this task):
//      fs.readFile, fs.appendFile, fs.promises.appendFile, fs.existsSync,
//      fs.writeFileSync
//    Reference: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
//
// -> This snippet adapts the "Reading files with fs.readFile" example from
//    that doc page (which reads a generic sample file) to instead read our
//    own tasks.txt file.
// =============================================================================

const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

// Adapted from the Node.js docs example for fs.readFile:
fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading tasks.txt:', err.message);
    return;
  }
  console.log('tasks.txt contents:');
  console.log(data);
});

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// tasks.txt contents:
// Set up project repository
// Review CIA-2 question paper
// ---------------------------------------------------------------------------
