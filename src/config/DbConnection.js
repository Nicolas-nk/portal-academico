const mysql = require('mysql2');

class DbConnection{
    connection(){
        if(!this.conn) {
            this.conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '12345678',
                database: 'academicodb2b12'
            });

            this.conn.connect((error)=>{

                if(error) {
                    console.log(`error : ${error}`)
                    throw error;
                }
                console.log('Conectado com sucesso!');
                
            })
        }
        return this.conn;
    }
}

module.exports = new DbConnection();