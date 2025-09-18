// mongoose
// string,number,boolean

const { Schema, default: mongoose } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    }, //"ali"
    email: {
        type: String,
        required: true,
        unique: true
    }, //"ali@gmail.com"
    age: {
        type: Number,
    }, //33
    password: {
        type: String,
        required: true //Express@123 -> $efhuvfdvaebnrgofihregrfevnoer
    }, //juhkj
    contact: {
        type: String,
        default: "Not Provided"
    }, //"0367829292020"
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],//["user","admin"]
        default:"student"
    },
    category:{
        type:String,
        enum:['clothing',"gyu"]
    }

})


const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel 