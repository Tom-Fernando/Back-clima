const mysql = require('../../database/index')

module.exports = {

    historico() {
        return new Promise((resolve, reject) => {
            const sql = `Select * from dados`

            mysql.getConnection((error, connection) => {
                connection.query(sql, function (error, result) {
                    connection.release();
                    (error) ? reject(error) : resolve(result)
                });
            });
        });
    },

    novoregistro(body) {
        return new Promise((resolve, reject) => {
            console.log(body.body, `model`)

            const sql = `Insert
                                   Into dados values
                                                   (null,
                                                      '${body.body.cidade}',
                                                      '${body.body.pais}',
                                                      '${body.body.temperatura}',
                                                      '${body.body.umidade}',
                                                      '${body.body.clima}')`
            console.log(sql)

            mysql.getConnection((error, connection) => {
                connection.query(sql, function (error, result) {
                    connection.release();
                    (error) ? reject(error) : resolve(result)
                });
            });
        });
    }
}