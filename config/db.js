const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://mikepangas2:9ALeU8Msq1Ew6Oyw@cluster0.cpings7.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);

        console.log('MongoDB Connection Established...');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
