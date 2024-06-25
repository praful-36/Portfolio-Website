// index.js
// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToMongo = require('./db');

// Initialize the app
connectToMongo();
const app = express();

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

// Define routes
app.use('/api/contact', require('./routes/Contact'))

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Portfolio backend listening at http://localhost:${port}`)
})

