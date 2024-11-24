const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Allow all origins, methods, and headers
app.use(express.json());

app.post('/submit-exam', (req, res) => {
    // Your backend logic for handling submitted exams
    res.status(200).json({ message: 'Exam submitted successfully!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
