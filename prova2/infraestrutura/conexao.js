const mysql = require('mysql')

const conexao = mysql.crateConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'leovolei',
    database: 'compasso'
})

module.exports = conexao
