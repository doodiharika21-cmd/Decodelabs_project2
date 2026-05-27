const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Backend Running');
});

app.get('/users', (req, res) => {

    const { name, email, age } = req.query;

    if (!name || !email || !age) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    if (name.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Name must be at least 3 characters'
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    if (age < 18) {
        return res.status(400).json({
            success: false,
            message: 'Age must be 18 or above'
        });
    }

    res.json({
        success: true,
        message: 'Validation successful',
        user: {
            name,
            email,
            age
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});