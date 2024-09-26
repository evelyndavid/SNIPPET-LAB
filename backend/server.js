




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
    password: String, // Password stored in plain text (NOT RECOMMENDED)
});

const User = mongoose.model('User', userSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Store password in plain text (NOT RECOMMENDED)
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'User already exists or other error.' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare plain text password directly
        if (password !== user.password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful!', success: true });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




// Flashcard Schema
const flashcardSchema = new mongoose.Schema({
    username: String,
    title: String,
    body: String,
    created: { type: Date, default: Date.now },
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

// Add Flashcard Route
app.post('/flashcards', async (req, res) => {
    const { username, title, body } = req.body;

    try {
        const newFlashcard = new Flashcard({ username, title, body });
        
        await newFlashcard.save();
        res.status(201).json({ message: 'Flashcard saved successfully!', flashcard: newFlashcard });
    } catch (error) {
        res.status(400).json({ error: 'Error saving flashcard.' });
    }
});


app.get('/flashcards/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const flashcards = await Flashcard.find({ username: username });
        res.status(200).json(flashcards);
        console.log(flashcards);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching flashcards' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

