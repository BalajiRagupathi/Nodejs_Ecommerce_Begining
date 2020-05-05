const exp = require("express");
const path = require("path");
const body = require("body-parser");
const app = exp();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const product = require("./controller/productcontroller");
const homePage = require("./controller/home");
const mongoConnect = require('./utils/database').mongoConnect;

app.set("view engin" , "ejs");
app.set("views" , "views");

app.use(exp.static(path.join(__dirname,"public")));
app.use(body.urlencoded({extended: true}));

// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result);
// })
// .catch(err => console.log(err));

app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use('/home',homePage.errorpage);
app.use('/products/:db/:category',product.display);
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

    app.listen(3000);
})
