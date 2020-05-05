const rootDir = require("../utils/path");
const path = require("path");
const HomeData = require("../models/home")

exports.errorpage = (req,res,next) => {
    
    HomeData.fetchAll().then(result => {

        console.log(result);
        res.render("index.ejs",{docTitle: "Bit Shop" , slides: result});
    });
};