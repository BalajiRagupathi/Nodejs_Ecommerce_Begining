const mongodb = require('mongodb');
const getdb = require('../../utils/database').getDb;

class Man_admin {

    constructor(m,c,n,b){
        this.main = m;
        this.mancardscollect = [];
        this.cat = c;
        this.n = n;
        console.log("Constructor");
    }

    save(){

        let myobj = this.cat;
        console.log("this");
        console.log(this.n);
        console.log("Myobj");
        console.log(myobj);
        const db = getdb();

        return db.collection('man_admin')
            .insertOne({main: this.main , [myobj+""]: [this.n]})
            .then((result) => {
                // console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }
    static fetchAll(){

        const db = getdb();
        return db.collection('man_admin')
            .find()
            .toArray()
            .then(users => {
                console.log(users);
                return users;
            })
            .catch(err => console.log(err));
    }

    static findById(cid,c,pid){

        const db = getdb();
        let i = "$"+c;

        return db.collection("man_admin").find({_id: new mongodb.ObjectId(cid)}).toArray().then(result => {

                console.log(result[0][c+""]);
                return result[0];
            }).catch(err => console.log(err));
    }

    static push(cid , c ,n){

        const db = getdb();
        let i = c;
        return db.collection('man_admin').update({_id: new mongodb.ObjectId(cid) },{$push: {[i+""]: n}}).then(result => {
            // console.log(result);
        }).catch(err => console.log(err));
    }

    static update(cid , c , pid,main,n){
        // let myobj = n;
        // console.log(`${[n+""]}`);
        console.log("update");
        console.log(n);
        const db = getdb();
        let i = c+"."+pid;
        return db.collection('man_admin').updateOne({_id: new mongodb.ObjectId(cid) },{$set: {main: main , [i+""]: n}}).then(result => {
            // console.log(result);
        }).catch(err => console.log(err));
    }

    static remove(cid , c , pid){

        const db = getdb();
        let i = c+"."+pid;
        return db.collection('man_admin').updateOne({_id: new mongodb.ObjectId(cid) },{$set: {[i+""]: null}}).then(result => {
            // console.log(result);
        }).catch(err => console.log(err));
    }

    static delete(cid){

        const db = getdb();
        return db.collection('man_admin').remove({_id: new mongodb.ObjectId(cid) }).then(result => {
            // console.log(result);
        }).catch(err => console.log(err));
    }
}

module.exports = Man_admin;