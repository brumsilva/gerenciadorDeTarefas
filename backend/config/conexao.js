const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '12345',
    database: 'db_basico'
})

conexao.connect((error) => { 
    if(error) throw error
    console.log('(┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻)')
})

module.exports = conexao