const exp = require("express");
const fs = require("fs");
const https = require('https');
const path = require("path");
const body = require("body-parser");
const app = exp();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const product = require("./controller/productcontroller");
const homePage = require("./controller/home");
const mongoConnect = require('./utils/database').mongoConnect;
const serverless = require("serverless-http");
const helmet = require("helmet");

app.set("view engin" , "ejs");
app.set("views" , "views");

// const privakeKey = fs.readFileSync("server.key");
// const certificate = fs.readFileSync("server.cert");

app.use(exp.static(path.join(__dirname,"public")));
app.use(body.urlencoded({extended: true}));
app.use(helmet());
// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result);
// })
// .catch(err => console.log(err));

app.use('/.netlify/functions/api/admin',adminRouter);
app.use('/.netlify/functions/api/user',userRouter);
app.use('/.netlify/functions/api/',homePage.errorpage);
app.use('/.netlify/functions/api/products/:db/:category',product.display);
// app.use('/', (req,res,next) => res.status(301).redirect(301,"/home"));

// sequelize
//     .sync()
//     .then(result => {

//         // console.log(result);
//     })
//     .catch(err => {

//         console.log(err);
//     });
    
//     app.listen(3001);

mongoConnect(() => {

    console.log("Connected");
//     https.createServer( { key:privakeKey , cert: certificate } , app)
        app.listen(process.env.PORT || 3000);
})
