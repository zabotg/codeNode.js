var mysql = require('mysql');

function createDBConnection(){
  return  mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '', //Inserir password
    database : 'casadocodigo_nodejs',
  });
}

//wrapper
module.exports = function(){
    return createDBConnection;
}
