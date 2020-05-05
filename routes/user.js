const exp = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const controller = require("../controller/user");
const userRouter = exp.Router();

userRouter.get("/login", (req,res,next) => res.render("userlogin.ejs",{docTitle: "Bit Shop",subTitle: "Login"}));
userRouter.get("/signup" , (req,res,next) => res.render("usersignup.ejs",{docTitle: "Bit Shop",subTitle: "Sign up"}));
userRouter.post("/loginsuccess", controller.loginsuccess);
userRouter.post("/signupsuccess", controller.signupsuccess);

module.exports = userRouter;