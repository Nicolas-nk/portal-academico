const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

const users = [{
    _id: 1,
    username: 'adm',
    password: '$2a$12$qOmC/xD0vzmp5HbouF1IfuQoIgzL3mLQNwtaL3ubxtHkbA/U.aqXi', //123
    email: 'adm@gmail.com.br'
}];

function findUser(username) {
    return users.find(item => item.username === username);
}

function findUserById(id) {
    return users.find(item => item._id === id);
}

// serializeUser = uma vez autenticado ele salva um cockie no front e usa uma versão no back

module.exports = (passport) => {
     passport.serializeUser((user, done)=>{
         done(null, user._id);
     })

     // deserializeUser => recupera as demais informações do objeto através do "id"
     passport.deserializeUser((id, done)=>{
         try {
             const user = findUserById(id);
             done (null, user);
         } catch (error) {
             console.log(error);
             return done(error, null);
         }
     });passport.use(new localStrategy({
         username : 'username',
         password : 'password'
     }, (username, password, done) => {
         try{
             const user = findUser(username);
             if (!user) return done(null,false);
             const isValid = bcrypt.compareSync(password, user.password);
             if (!isValid) return done(null, false);
             return done(null, user);
         } catch (error) {
             console.log(error);
             return done(error, false);
            }
        }
    ))
}