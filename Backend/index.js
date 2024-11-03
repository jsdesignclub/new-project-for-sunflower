require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool using environment variables
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your server's capabilities
    queueLimit: 0
});

// Get all vehicles
app.get('/api/user', (req, res) => {
    const sql = 'SELECT * FROM User';
    pool.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching vehicles:', err.message);
            return res.status(500).json({ message: 'Error fetching vehicles', error: err.message });
        }

       
        res.status(200).json(result);
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
