const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');

//DB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));


const app = express();
app.use('/', require('./routes/appRoutes'))



const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));