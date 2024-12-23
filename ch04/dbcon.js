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

/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;
*/