// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
// Parse JSON request body
app.use(express.json());
const port = process.env.PORT || 3000; // Define the port number (default: 3000)

// Define a GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Express.js GET API.');
});

app.post('/:studentId', (req, res) => {
  // Access data from URL parameters
  const studentId = req.params.studentId;
  // Get MCQs data from the request body
  const mcqsResult = req.body;
  // Log the received data
  console.log(mcqsResult);

  // Send the modified data as a response
  res.json({ message: 'Data received successfully', data: mcqsResult, studentId: studentId });
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
