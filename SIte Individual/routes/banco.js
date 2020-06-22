var configuracoes = {
    banco: {
        server: "",
        user: "luvas",
        password: "53677821lA",
        database: "bdPessoalPI ",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');

function conectar() {
  sql.close();
  return sql.connect(configuracoes.banco)
} 

module.exports = {
    conectar: conectar,
    sql: sql,
    config: configuracoes.banco
}

