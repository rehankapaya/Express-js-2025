const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({


    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "Not Provided"
    },
    category: {
        type: String,
        enum:["clothes","shoes","makeup","elctronics","other"],
        default:"other"
    },
    price:{
        type:Number,
        required:true,
        default:0
    }


})


const ProductModel = mongoose.model('product',productSchema)
module.exports = ProductModel