const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Commented out mongoose connection
// mongoose.connect('mongodb://localhost/your_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example of a simple API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the backend' });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
  console.log("working");
});

// Terminate the server after 30 seconds
setTimeout(() => {
  console.log('Terminating server after 30 seconds');
  server.close(() => {
    console.log('Server terminated');
    process.exit(0);
  });
}, 30000);
