const express = require('express');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
