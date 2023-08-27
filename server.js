const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
