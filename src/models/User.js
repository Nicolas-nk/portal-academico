const DbConnection = require('../config/DbConnection');

class User {

    findUsers() {
        return new Promise((resolve, reject)=>{
            DbConnection.connection().query("SELECT * FROM usuario", (err, result)=>{
                if(err) reject(err);
                resolve(result);
            })
        })
    }

    findUsers(username) {
        return new Promise((resolve, reject) =>{
            const sql = `SELECT * FROM usuarios WHERE email_usuario = ${username}`;
            DbConnection.connection().query(sql, (err, result)=>{
                if(err) reject(err);
                resolve(result[0]);
            })
        });
    }

    findUsers(id) {
        return new Promise((resolve, reject) =>{
            const sql = `SELECT * FROM usuarios WHERE id = ${id}`;
            DbConnection.connection().query(sql, (err, result)=>{
                if(err) reject(err);
                resolve(result[0]);
            })
        });
    }  

}



module.export = new User();