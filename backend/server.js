require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String, // In a real application, hash this password!
});

const User = mongoose.model('User', userSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password }); // Use hashed password in real applications
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'User already exists or other error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String, // In a real application, hash this password!
// });

// const User = mongoose.model('User', userSchema);

// // Sign Up Route
// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const newUser = new User({ name, email, password }); // Use hashed password in real applications
//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully!' });
//     } catch (error) {
//         res.status(400).json({ error: 'User already exists or other error.' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });