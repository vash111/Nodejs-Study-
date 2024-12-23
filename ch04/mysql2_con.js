const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'company'
});

connection.connect((err) => {
   if (err) throw err;
    console.log('MySQL에 연결되었습니다.');
});

connection.query('SELECT * FROM emp', 
   (err, results) => {
    if (err) throw err;
    console.log(results);
});

connection.end();