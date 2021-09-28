const mysql = require('mysql');

module.exports = mysql.createPool({
    host: 'mysql745.umbler.com',
    port: '41890',
    user: 'tom',
    password: 'Clima123456',
    database: 'climatempo',
})