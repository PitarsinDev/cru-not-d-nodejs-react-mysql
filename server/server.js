const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cru_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error conenction to database');
    } else {
        console.log('Connected to database');
    }
});

app.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.post('/add', (req, res) => {
    const { name, occupation, salary } = req.body;
    const sql = `INSERT INTO employees (name, occupation, salary) VALUES ('${name}', '${occupation}', ${salary})`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send('Employee added successfully');
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM employees WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send('Employee deleted successfully');
    });
});

app.listen(port, () => {
    console.log('Server is running');
});