const getdb = require('../../utils/database').getDb;

class User {

    constructor(n,p,e){
        
        this.user = n;
        this.pass = p;
        this.email = e;
    }

    save(){
        
        const db = getdb();
        return db.collection('user')
        .insertOne(this)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAll(){

        const db = getdb();
        return db.collection('user')
            .find()
            .toArray()
            .then(users => {
                console.log(users);
                return users;
            })
            .catch(err => console.log(err));

    }
}

module.exports = User;

// module.exports = class UserData{

//     constructor(u,p,e){

//         this.user = u;
//         this.pass = p;
//         this.email = e;
//     }

//     save(){

//         userdata.push(this);
//     }

//     static fetchAll(){

//         return userdata;
//     }
// }

// const Sequelize = require('sequelize');

// const sequelize = require("../../utils/database");

// const User = sequelize.define('user',{
//     id: {

//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     user: {

//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     pass: {

//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {

//         type: Sequelize.STRING,
//         allowNull: false
//     }
// })

// module.exports = User;