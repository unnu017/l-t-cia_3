# CIA-2 Practical — Set 1 — Command-Line Task Logger

**Attempted Tasks: Task 1, Task 2, Task 3, Task 5, Task 8, Task 9, Task 10, Task 11, Task 14, Task 15**

Course: Node.js & Asynchronous JavaScript | CIA-2 | Practical Question Paper — Set 1
Christ University | L&T EduTech

## Structure

Per the exam submission instructions, code is organized in a folder named after
the assigned practical set, with one file per attempted task:

```
Set1/
├── Task1.js
├── Task2.js
├── Task3.js
├── Task5.js
├── Task8.js
├── Task9.js
├── Task10.js
├── Task11.js
├── Task14.js
├── Task15.js
├── taskModule.js   # supporting local module for Task 15
└── tasks.txt        # shared data file used by the file-based tasks
package.json
.gitignore
README.md
```

Each `TaskN.js` file is self-contained and runnable on its own, and includes
the expected sample console output as a comment at the bottom of the file.

## How to run

```bash
npm install        # no external dependencies required, matches Task 1's setup step
node Set1/Task1.js
node Set1/Task2.js
node Set1/Task3.js
node Set1/Task5.js "Buy groceries"     # then answer y/n at the prompt
node Set1/Task8.js
node Set1/Task9.js                     # runs for ~15 seconds (timers)
node Set1/Task10.js
node Set1/Task11.js
node Set1/Task14.js
node Set1/Task15.js
```

All file-appending tasks (8, 10, 11, 14, 15) write to `Set1/tasks.txt`, so
running them repeatedly will keep adding lines to that file — this is expected.

## Notes

- Tasks 4, 6, 7, 12, 13 were not attempted (10 of 15 required, per the exam
  instructions).
- Every file above was executed with `node <file>.js` and its real output
  verified before being committed — the comment block at the bottom of each
  file reflects actual observed output, not assumed output.
