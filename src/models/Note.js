const mongoose= require('mongoose');


//There are basically two steps in creating mode
//1.Creating Schema to describe the key and properties of the value
//Schema takes Map
//2.Creating Model from the Schema
const noteSchema =mongoose.Schema({

    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dateAdded:{
        type:Date,
        default:Date.now,
    }
});



//In order to make other files able to use this module
//we need to export this file which is done in following way
//Here model has been created
module.exports= mongoose.model("Note",noteSchema);