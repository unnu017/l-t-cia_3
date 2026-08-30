// Set1/Task14.js
// =============================================================================
// Task 14: Command-Line Task Logger — Recursive Functions, Event Loop Execution
//          Flow & EventEmitter
// =============================================================================
// (This file focuses on the EventEmitter portion of Task 14.)
// -> Create an EventEmitter named taskEmitter that emits a "taskAdded" event
//    whenever a new task is saved.
// -> Add a listener that logs "New task added: <task>" whenever "taskAdded"
//    fires, triggered from within saveTaskAsync.
// =============================================================================

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const fsPromises = fs.promises;
const TASKS_FILE = path.join(__dirname, 'tasks.txt');

const taskEmitter = new EventEmitter();

taskEmitter.on('taskAdded', (task) => {
  console.log(`New task added: ${task}`);
});

async function saveTaskAsync(task) {
  try {
    await fsPromises.appendFile(TASKS_FILE, task + '\n');
    console.log(`Saved (async/await): "${task}"`);
    taskEmitter.emit('taskAdded', task); // fires the listener above
  } catch (err) {
    console.error(`Failed to save task: ${err.message}`);
  }
}

saveTaskAsync('Finish CIA-2 assignment');

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// Saved (async/await): "Finish CIA-2 assignment"
// New task added: Finish CIA-2 assignment
// ---------------------------------------------------------------------------
