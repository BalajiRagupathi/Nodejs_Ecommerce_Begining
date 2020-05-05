const KidsCardsCollect = require("../models/admin/kidsdashboarddata");
const Slides = require("../models/home");

exports.addProducts = (req,res,next) => {

    console.log("Add");
    let arr = req.body;
    console.log(arr);
    let v1,i=0,cat;
    let newobj= {};
    let main;
    for(let val in arr){
        
        console.log(val);
        if( i == 0 ){

            main = arr[val];
            i++;
        }
        else if( i == 1 ){

            cat = arr[val];
            i++;
        }
        else if( i%2 == 0 ){

            v1 = val;
            i++;
        }
        else{

            let k = arr[v1+""];
            newobj[k+""] = arr[val+""];
            console.log(arr[v1]+" = "+arr[val]);
            i++;
        }
    }

    const cards = new KidsCardsCollect(main,cat,newobj,true);
    cards.save()
    .then(() => {

        console.log("Fetching");
        console.log("End Fetching");

        return KidsCardsCollect.fetchAll();

    }).then(result => {

        console.log("Come");
        console.log(result);
        console.log("End");

        return res.status(301).redirect(301,"/admin/kids-dashboard");
    })
    .catch();
}

exports.alreadyaddProducts = (req,res,next) => {

    console.log("Already");
    let arr = req.body;
    const categoryId = req.params.categoryId;
    console.log(arr);
    let i=0,cat;
    let newobj= {};

    for(let val in arr){
        
        console.log(val);
        if( i == 0 ){

            cat = arr[val];
            i++;
        }
        else{

            newobj[val+""] = arr[val+""];
            i++;
        }
    }

    KidsCardsCollect.push(categoryId,cat,newobj).then(result => {
        return res.status(301).redirect(301,"/admin/kids-dashboard");
    }).catch(err => console.log(err));
    
}

exports.editproducts = (req,res,next) => {

    console.log("Edit");
    const categoryId = req.params.categoryId;
    const category = req.params.category;
    const prodId = req.params.productId;

    console.log(categoryId);
    console.log(category);
    console.log(prodId);
    
    KidsCardsCollect.findById(categoryId,category,prodId).then(result => {

        console.log(result[category+""][prodId]);
        return res.render("kids_edit.ejs",{docTitle: "Admin Kids Edit" , catId: categoryId , cat: category , prodId: prodId ,main: result.main , product: result[category+""][prodId]});
    }).catch(err => console.log(err));
}

exports.removeproducts = (req,res,next) => {

    console.log("Remove");
    const categoryId = req.params.categoryId;
    const category = req.params.category;
    const prodId = req.params.productId;

    console.log(categoryId);
    console.log(category);
    console.log(prodId);

    KidsCardsCollect.remove(categoryId,category,prodId).then(result => {

        return KidsCardsCollect.findById(categoryId,category,prodId)
        // console.log(result);
        
    }).then(result=>{

        console.log();

        let b = false;
        for(let val of result[category+""]){

            console.log(val);
            if( val != null ){
                b = true;
            }
        }
        
        if( b == false ){
            return KidsCardsCollect.delete(categoryId)
        }
        else{
            return res.status(301).redirect(301,"/admin/kids-dashboard");
        }
    }).then(result => {

        return res.status(301).redirect(301,"/admin/kids-dashboard");    
    })
    .catch(err => console.log(err));
}

exports.deleteproduct = (req,res,next) => {
    console.log("Remove");
    const categoryId = req.params.categoryId;
    KidsCardsCollect.delete(categoryId).then(result => res.status(301).redirect(301,"/admin/kids-dashboard")).catch();
}

exports.update = (req,res,next) => {

    console.log("Update");
    const categoryId = req.params.categoryId;
    const category = req.params.category;
    const prodId = req.params.productId;

    console.log(categoryId);
    console.log(category);
    console.log(prodId);
    console.log(req.body);

    let arr = req.body;
    console.log(arr);
    let i=0,cat;
    let main;
    let newobj= {};

    for(let val in arr){
        
        console.log(val);
        if( i == 0 ){

            main = arr[val+""];
            i++;
        }
        else if( i == 1 ){

            cat = arr[val+""];
            i++;
        }
        else{

            newobj[val+""] = arr[val+""];
            i++;
        }
    }

    console.log(newobj);

    KidsCardsCollect.update(categoryId,category,prodId,main,newobj).then(result => {

        console.log(result);
        res.status(301).redirect(301,"/admin/kids-dashboard");
    }).catch(err => console.log(err));
}

exports.dashboard = (req,res,next) => {
    
    console.log("Dash");
    KidsCardsCollect.fetchAll().then(result => {

        Slides.fetchAll().then(slide => res.render("admin_kids_dashboard.ejs",{docTitle: "Kids Admin Bit Shop",subTitle: "Kids",cards: result,slides: slide}))
    })
}

//Slides database
exports.addslides = (req,res,next) => {

    Slides.fetchAll().then(result => {

        const sld = new Slides(req.body.img,req.body.cap,result.length);
        sld.save().then(result => res.status(301).redirect(301,"/admin/kids-dashboard"))
    }).catch(err => console.log(err));
}


exports.deleteslide = (req,res,next) => {

    Slides.delete(req.params.id).then(() => {

        res.status(301).redirect(301,"/admin/kids-dashboard");
    }).catch(err => console.log(err));
}