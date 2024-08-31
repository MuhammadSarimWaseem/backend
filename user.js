const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://event:abc123%21%40%23@mern.apcob.mongodb.net/MERN_Website?retryWrites=true&w=majority&appName=MERN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log("MongoDB connected"); })
    .catch((error) => { console.error("MongoDB connection error:", error); });


mongoose.connection.on('error', err => {
    console.log('connection failed');
});

mongoose.connection.on('connected', () => {
    console.log('connected successfully with database');
});

// Define user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

// Create user model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;