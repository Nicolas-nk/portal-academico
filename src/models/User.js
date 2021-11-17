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

}

module.export = new User();