const mongoose= require("mongoose");
 const UserSchema= mongoose.Schema({
    username:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    age:{type:Number},
    tel:{type:String},
    admin:{type:Boolean}
 })
  
 modules.exports=mongoose.model("user",UserSchema);