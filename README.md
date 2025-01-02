# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where the server hangs due to a long-running synchronous operation within the request handler.  The `server.js` file contains the problematic code, while `serverSolution.js` provides a solution using asynchronous operations.

**Problem:** The synchronous `while` loop blocks the event loop, preventing other requests from being processed.  This leads to the server appearing unresponsive.

**Solution:** Refactor the long-running task to use asynchronous operations (e.g., using `setTimeout` or promises) to avoid blocking the event loop.