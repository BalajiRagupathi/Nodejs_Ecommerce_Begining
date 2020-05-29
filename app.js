const exp = require("express");
const http = require('http');
const path = require("path");
const body = require("body-parser");
const app = exp();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const product = require("./controller/productcontroller");
const homePage = require("./controller/home");
const mongoConnect = require('./utils/database').mongoConnect;
const serverless = require("serverless-http");

app.set("view engin" , "ejs");
app.set("views" , "views");

app.use(exp.static(path.join(__dirname,"public")));
app.use(body.urlencoded({extended: true}));

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
    app.listen(process.env.PORT || 3000);
})


module.exports = app;
module.exports.handler = serverless(app);
