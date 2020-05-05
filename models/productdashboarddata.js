const getdb = require('../utils/database').getDb;

class Product {

    static fetchAll(col,cat){

        const db = getdb();
        return db.collection(col+"")
            .find({main: cat})
            .toArray()
            .then(users => {
                
                return users;
            })
            .catch(err => console.log(err));

    }
}

module.exports = Product;