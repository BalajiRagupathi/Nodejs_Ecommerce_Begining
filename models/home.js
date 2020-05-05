// const slides = [
//     {
//         id: 1,
//         img: "https://cdn2.vectorstock.com/i/1000x1000/85/51/glowing-lights-golden-black-friday-sale-banner-vector-22848551.jpg",
//         caption: "Black Friday"
//     },
//     {
//         id: 2,
//         img: "https://img.freepik.com/free-vector/sale-banner-template-design_74379-121.jpg?size=626&ext=jpg",
//         caption: "Big Sale"
//     },
//     {
//         id: 3,
//         img: "https://thumbs.dreamstime.com/z/sale-posters-vector-black-friday-sale-banner-special-offer-shopping-illustration-sale-posters-vector-black-friday-sale-banner-146061862.jpg",
//         caption: "Mega Sale"
//     }
// ];
const getdb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class Slider{

    constructor(m,c,s){

        this.id = s+1;
        this.img = m+"";
        this.caption = c;
    }

    save(){

        const db = getdb();
        return db.collection('slides')
        .insertOne(this)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAll(){

        const db = getdb();
        return db.collection('slides')
            .find()
            .toArray()
            .then(slides => {
                console.log(slides);
                return slides;
            })
            .catch(err => console.log(err));
    }

    static delete(id){

        const db = getdb();
        return db.collection('slides').remove({_id: new mongodb.ObjectId(id)}).then(result => console.log(result)).catch(err=>console.log(err));
    }
}

module.exports = Slider;