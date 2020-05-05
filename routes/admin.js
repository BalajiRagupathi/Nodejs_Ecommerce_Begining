const exp = require("express");
const mancontroller = require("../controller/admin");
const womencontroller = require("../controller/women_controller");
const kidscontroller = require("../controller/kids_controller");
const commoncontroller = require("../controller/common_controller")
const adminRouter = exp.Router();

adminRouter.get("/login", (req,res,next) => res.render("adminlogin.ejs",{docTitle: "Bit Shop",subTitle: "Login"}));
adminRouter.post("/loginsuccess", mancontroller.loginsuccess);
//man products
adminRouter.post('/man-add-products', mancontroller.addProducts);
adminRouter.get('/man-dashboard' , mancontroller.dashboard);
adminRouter.post('/man-already-add-products/:categoryId', mancontroller.alreadyaddProducts);
adminRouter.get('/man-editproduct/:categoryId/:category/:productId' , mancontroller.editproducts);
adminRouter.get('/man-removeproduct/:categoryId/:category/:productId' , mancontroller.removeproducts);
adminRouter.get('/man-deleteproduct/:categoryId' , mancontroller.deleteproduct);
adminRouter.post('/man-update/:categoryId/:category/:productId', mancontroller.update);
//women
adminRouter.post('/women-add-products', womencontroller.addProducts);
adminRouter.get('/women-dashboard' , womencontroller.dashboard);
adminRouter.post('/women-already-add-products/:categoryId', womencontroller.alreadyaddProducts);
adminRouter.get('/women-editproduct/:categoryId/:category/:productId' , womencontroller.editproducts);
adminRouter.get('/women-removeproduct/:categoryId/:category/:productId' , womencontroller.removeproducts);
adminRouter.get('/women-deleteproduct/:categoryId' , womencontroller.deleteproduct);
adminRouter.post('/women-update/:categoryId/:category/:productId', womencontroller.update);
//kids
adminRouter.post('/kids-add-products', kidscontroller.addProducts);
adminRouter.get('/kids-dashboard' , kidscontroller.dashboard);
adminRouter.post('/kids-already-add-products/:categoryId', kidscontroller.alreadyaddProducts);
adminRouter.get('/kids-editproduct/:categoryId/:category/:productId' , kidscontroller.editproducts);
adminRouter.get('/kids-removeproduct/:categoryId/:category/:productId' , kidscontroller.removeproducts);
adminRouter.get('/kids-deleteproduct/:categoryId' , kidscontroller.deleteproduct);
adminRouter.post('/kids-update/:categoryId/:category/:productId', kidscontroller.update);
//common
adminRouter.post('/common-add-products', commoncontroller.addProducts);
adminRouter.get('/common-dashboard' , commoncontroller.dashboard);
adminRouter.post('/common-already-add-products/:categoryId', commoncontroller.alreadyaddProducts);
adminRouter.get('/common-editproduct/:categoryId/:category/:productId' , commoncontroller.editproducts);
adminRouter.get('/common-removeproduct/:categoryId/:category/:productId' , commoncontroller.removeproducts);
adminRouter.get('/common-deleteproduct/:categoryId' , commoncontroller.deleteproduct);
adminRouter.post('/common-update/:categoryId/:category/:productId', commoncontroller.update);
//slides
adminRouter.post('/man-add-slides', mancontroller.addslides);
adminRouter.get('/man-delete-slides/:id', mancontroller.deleteslide);
adminRouter.post('/women-add-slides', womencontroller.addslides);
adminRouter.get('/women-delete-slides/:id', womencontroller.deleteslide);
adminRouter.post('/kids-add-slides', kidscontroller.addslides);
adminRouter.get('/kids-delete-slides/:id', kidscontroller.deleteslide);
adminRouter.post('/common-add-slides', commoncontroller.addslides);
adminRouter.get('/common-delete-slides/:id', commoncontroller.deleteslide);

module.exports = adminRouter;