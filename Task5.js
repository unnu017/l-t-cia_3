// Set1/Task5.js
// =============================================================================
// Task 5: Command-Line Task Logger — Node Process Object, Command Line & Terminal I/O
// =============================================================================
// -> Accept a task description as a command-line argument (process.argv) and
//    print it.
// -> Use process.stdin to prompt the user to confirm ("y/n") before saving the
//    task, and print a message based on their response.
//
// Run with:  node Task5.js "Buy groceries"
// =============================================================================

const readline = require('readline');

const taskDescription = process.argv[2];

if (!taskDescription) {
  console.log('No task description provided. Run: node Task5.js "Your task here"');
  process.exit(0);
}

console.log(`Task to log: "${taskDescription}"`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Save this task? (y/n): ', (answer) => {
  const normalized = answer.trim().toLowerCase();
  if (normalized === 'y' || normalized === 'yes') {
    console.log(`Confirmed: "${taskDescription}" will be saved.`);
  } else {
    console.log('Task discarded. Not saved.');
  }
  rl.close();
});

// ---------------------------------------------------------------------------
// Expected sample console output (run as: node Task5.js "Buy groceries", then
// type "y" and press Enter):
//
// Task to log: "Buy groceries"
// Save this task? (y/n): Confirmed: "Buy groceries" will be saved.
// ---------------------------------------------------------------------------
