/**
 * Created by User on 11/1/2017.
 */
var mongoose= require('mongoose');

var product = new mongoose.Schema({
    productName : String,
    basePrice : Number,
    category : String,
    brand : String,
    productMaterial : String,
    imageUrl : String,
    delivery : Date,
    details : String,
    reviews : [{
        rating: Number,
        content: String,
    }],

},{collection:'products'});

module.exports=mongoose.model('Product',product);
