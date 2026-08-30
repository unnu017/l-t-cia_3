// Set1/Task9.js
// =============================================================================
// Task 9: Command-Line Task Logger — Node Timers & Global Objects
// =============================================================================
// -> Use setTimeout to automatically log a "Reminder: review your tasks"
//    message 5 seconds after the app starts.
// -> Use setInterval to print the number of tasks logged so far every 3
//    seconds, clearing it with clearInterval after 15 seconds.
// =============================================================================

let tasksLoggedThisRun = 2; // pretend 2 tasks were already logged this run

setTimeout(() => {
  console.log('Reminder: review your tasks');
}, 5000);

const intervalId = setInterval(() => {
  console.log(`Tasks logged so far this run: ${tasksLoggedThisRun}`);
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('Stopped periodic task-count reminders.');
}, 15000);

console.log('Timers started. Waiting for setTimeout/setInterval to fire...');

// ---------------------------------------------------------------------------
// Expected sample console output (over ~15 seconds):
//
// Timers started. Waiting for setTimeout/setInterval to fire...
// Tasks logged so far this run: 2        (at ~3s)
// Reminder: review your tasks            (at ~5s)
// Tasks logged so far this run: 2        (at ~6s)
// Tasks logged so far this run: 2        (at ~9s)
// Tasks logged so far this run: 2        (at ~12s)
// Stopped periodic task-count reminders. (at ~15s)
// ---------------------------------------------------------------------------
