const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//The bug is that if the client closes the connection before the 5 seconds are up, the server will still try to send the response, causing a potential error in the server logs.  It does not handle the premature client disconnection gracefully.