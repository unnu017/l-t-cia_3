// Set1/Task11.js
// =============================================================================
// Task 11: Command-Line Task Logger — Try/Catch Error Handling & Async-Await
// =============================================================================
// -> Write an async function saveTaskAsync(task) that awaits
//    saveTaskPromise(task) inside a try/catch block.
// -> Demonstrate the catch block firing by temporarily pointing the file path
//    to a non-existent folder.
// =============================================================================

const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;
const TASKS_FILE = path.join(__dirname, 'tasks.txt');

function saveTaskPromise(task, targetPath) {
  return fsPromises.appendFile(targetPath, task + '\n');
}

async function saveTaskAsync(task, targetPath = TASKS_FILE) {
  try {
    await saveTaskPromise(task, targetPath);
    console.log(`Saved (async/await): "${task}"`);
  } catch (err) {
    console.error(`Failed to save task (async/await): ${err.message}`);
  }
}

async function main() {
  // Normal successful save:
  await saveTaskAsync('Finish CIA-2 assignment');

  // Intentionally broken path, to prove the catch block actually fires:
  await saveTaskAsync('This will fail', path.join(__dirname, 'this-folder-does-not-exist', 'tasks.txt'));
}

main();

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// Saved (async/await): "Finish CIA-2 assignment"
// Failed to save task (async/await): ENOENT: no such file or directory, open '.../this-folder-does-not-exist/tasks.txt'
// ---------------------------------------------------------------------------
