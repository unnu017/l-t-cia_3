// Set1/Task15.js
// =============================================================================
// Task 15: Command-Line Task Logger — Node Modules — Types, Core/Local Modules
//          & Import-Export
// =============================================================================
// -> Move the task-saving function(s) into a separate local module
//    taskModule.js, exporting them with module.exports (see Set1/taskModule.js).
// -> Import taskModule.js into this file using require() and confirm the app
//    still works correctly.
// =============================================================================

const { saveTaskAsync } = require('./taskModule'); // local module import

async function main() {
  const result = await saveTaskAsync('Finish CIA-2 assignment');
  console.log(result);
  console.log('taskModule.js imported and working correctly.');
}

main();

// ---------------------------------------------------------------------------
// Expected sample console output:
//
// Saved: "Finish CIA-2 assignment"
// taskModule.js imported and working correctly.
// ---------------------------------------------------------------------------
