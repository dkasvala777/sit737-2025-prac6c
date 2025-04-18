const express = require('express');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
  res.send('This is the updated version!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
