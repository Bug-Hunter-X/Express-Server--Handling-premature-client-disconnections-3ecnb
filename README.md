# Express Server: Handling Premature Client Disconnections

This repository demonstrates a common issue in Node.js Express servers where a response is sent after the client disconnects.  The example shows how to mitigate this with proper error handling. 

## Bug Description
The provided `bug.js` simulates a server that sends a response after a 5-second delay. If the client closes the connection before this time elapses, an error may occur on the server side. This is inefficient and creates unnecessary load on the system.  The solution file, `bugSolution.js` addresses this by checking the connection status before sending the response.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`. 
4. Open your browser and go to `http://localhost:3000`. 
5. Close the browser tab before the "Hello World!" message appears.
6. Observe server logs (you may see errors indicating that the response cannot be sent).
7. Repeat the steps with `bugSolution.js` to see how this issue is mitigated.