const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Azure SQL Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

// Connect to the database
sql.connect(dbConfig, err => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

// API endpoints for account management
app.post('/create-account', (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}');`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Account created successfully');
    });
});

app.get('/get-account', (req, res) => {
    const { username } = req.query;
    const query = `SELECT * FROM accounts WHERE username = '${username}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

app.put('/update-account', (req, res) => {
    const { username, password } = req.body;
    const query = `UPDATE accounts SET password = '${password}' WHERE username = '${username}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Account updated successfully');
    });
});

app.delete('/delete-account', (req, res) => {
    const { username } = req.body;
    const query = `DELETE FROM accounts WHERE username = '${username}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Account deleted successfully');
    });
});

// API endpoints for album management
app.post('/create-album', (req, res) => {
    const { albumName, albumDescription } = req.body;
    const query = `INSERT INTO albums (albumName, albumDescription) VALUES ('${albumName}', '${albumDescription}');`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Album created successfully');
    });
});

app.get('/get-album', (req, res) => {
    const { albumId } = req.query;
    const query = `SELECT * FROM albums WHERE albumId = '${albumId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

app.put('/update-album', (req, res) => {
    const { albumId, albumName, albumDescription } = req.body;
    const query = `UPDATE albums SET albumName = '${albumName}', albumDescription = '${albumDescription}' WHERE albumId = '${albumId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Album updated successfully');
    });
});

app.delete('/delete-album', (req, res) => {
    const { albumId } = req.body;
    const query = `DELETE FROM albums WHERE albumId = '${albumId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Album deleted successfully');
    });
});

// API endpoints for latest announcements
app.post('/create-announcement', (req, res) => {
    const { title, content } = req.body;
    const query = `INSERT INTO announcements (title, content) VALUES ('${title}', '${content}');`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Announcement created successfully');
    });
});

app.get('/get-announcement', (req, res) => {
    const { announcementId } = req.query;
    const query = `SELECT * FROM announcements WHERE announcementId = '${announcementId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

app.put('/update-announcement', (req, res) => {
    const { announcementId, title, content } = req.body;
    const query = `UPDATE announcements SET title = '${title}', content = '${content}' WHERE announcementId = '${announcementId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Announcement updated successfully');
    });
});

app.delete('/delete-announcement', (req, res) => {
    const { announcementId } = req.body;
    const query = `DELETE FROM announcements WHERE announcementId = '${announcementId}';`;
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Announcement deleted successfully');
    });
});

// Fetch all accounts
app.get('/get-accounts', (req, res) => {
    const query = 'SELECT * FROM accounts;';
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

// Fetch all albums
app.get('/get-albums', (req, res) => {
    const query = 'SELECT * FROM albums;';
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

// Fetch all announcements
app.get('/get-announcements', (req, res) => {
    const query = 'SELECT * FROM announcements;';
    new sql.Request().query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result.recordset);
    });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
