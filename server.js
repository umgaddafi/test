const express = require('express');
const cors = require('cors'); // We'll install this soon

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port for hosting

// Use CORS middleware to allow cross-origin requests
// This is crucial for connecting your Netlify frontend
// You can restrn to your Netlify URL later
app.use(cors()); 

// Basic API Route
app.get('/', (req, res) => {
  res.send('Hello from the Express Backend!');
});

// A simple JSON API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'running', server: 'Express', database: 'Disconnected (for now)' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});