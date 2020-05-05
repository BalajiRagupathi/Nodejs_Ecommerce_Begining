const ProductData = require('../models/productdashboarddata');

exports.display = (req,res,next) => {

    let cat = req.params.category;
    let db = req.params.db;

    ProductData.fetchAll(db,cat)
                .then(result => {

                    res.render("product.ejs",{docTitle: "Bit Shop"});
                })
                .catch(err => console.log(err));
}