const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    publicationYear: {
        type: Number,
        required: false,
    },
    genres: {
        type: [String], // Array of strings, can store multiple genres. Specific to NoSQL databases
        required: false,
    },
    isbn: {
        type: String,
        required: true,
        unique: true, // ISBN should be unique for each book
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
});

// Compile and export the model
module.exports = mongoose.model('Book', bookSchema);
