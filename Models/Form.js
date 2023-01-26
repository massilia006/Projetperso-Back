const mongoose= require("mongoose");
 const FormSchema= mongoose.Schema({
    firstname:{type:String, required: true},
    lastname:{type:String, required: true},
    gender:{type:String, required: true},
    quantite:{type:String},
    about:{type:String},
    
 })
  
 module.exports=mongoose.model("form",FormSchema);