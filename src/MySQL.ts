const { createConnection } = require('mysql');

const database = createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'brugbot',
});

database.connect();

