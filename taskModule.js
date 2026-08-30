// Set1/taskModule.js
// =============================================================================
// Task 15 (supporting file): local module holding the task-saving function(s),
// exported with module.exports so it can be imported elsewhere with require().
// =============================================================================

const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;
const TASKS_FILE = path.join(__dirname, 'tasks.txt');

async function saveTaskAsync(task) {
  await fsPromises.appendFile(TASKS_FILE, task + '\n');
  return `Saved: "${task}"`;
}

module.exports = {
  saveTaskAsync,
  TASKS_FILE,
};
