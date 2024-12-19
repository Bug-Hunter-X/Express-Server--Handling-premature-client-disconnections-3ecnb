const express = require('express');
const app = express();
app.get('/', (req, res) => {
  let timeoutId = setTimeout(() => {
    if (!res.writableEnded) {
      res.send('Hello World!');
    }
  }, 5000);
  req.on('close', () => {
    clearTimeout(timeoutId);
    console.log('Client connection closed.');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});