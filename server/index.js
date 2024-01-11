const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose'); 
const cookieParser = require('cookie-parser');

const app = express();

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/appRoutes'));

const port = process.env.PORT || 8000; // Use process.env.PORT if available
app.listen(port, () => console.log(`Server is running on port ${port}`));
