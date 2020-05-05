const path = require("path");
const fs = require("fs");
const UserData = require("../models/user/userdata");
const rootDir = require("../utils/path");
let lg;
exports.loginsuccess = (req,res,next) => {

    console.log("Logg");
    UserData.fetchAll()
    .then( result => {
        
        let flag = false;
        for(let val of result){

            console.log(val);
            if( req.body.uname == val.user && req.body.pass == val.pass ){
                flag = true;
                console.log("Logged");
                return res.render("userdashboard.ejs",{docTitle: "Bit Shop",user: val});//ejs file
            }
        }

        if( flag == false ){

            return PromiseRejectionEvent();
        }
    })
    .catch(() => res.status(301).redirect(301,"/user/login"));
}

exports.signupsuccess = (req,res,next) => {

    let name = req.body.uname;
    if( req.body.pass != req.body.re_pass ){

        return res.status(301).redirect(301,"/user/signup");
    }

    let flag = 0;
    const userdata = new UserData(req.body.uname,req.body.pass,req.body.email);

    UserData.fetchAll().then(users => {
        
        for(let i = 0 ; i < users.length ; i++){

            if( users[i].user == name ){

                return PromiseRejectionEvent();
            }
        }
        
        return userdata.save();
    }).then(result => {

        console.log("Created");
        res.redirect("/user/login");
    })
    .catch(() => res.redirect('/user/signup'));

    // UserData.findAll()
    // .then(result => {
        
    //     for(let val of result){
    //         if( val.user == name ){
                
    //             return PromiseRejectionEvent();
    //         }
    //     }

    //     return UserData.create({
    //         user: req.body.uname,
    //         pass: req.body.pass,
    //         email: req.body.email
    //     });
    //     // return res.status(301).redirect(301,"/user/signup");
    // }).then(() => {

    //     let fname = req.body.uname+".txt";
    //     let fdata = "name : "+ req.body.uname + "\npassword : " + req.body.pass + " \nemail : " + req.body.email;
    //     fs.writeFileSync(fname,fdata);

    //     return res.status(301).redirect(301,'/user/login');
    // })
    // .catch(() => res.redirect(301,'/user/signup'));
}