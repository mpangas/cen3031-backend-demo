const express = require('express');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the books routes
app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
