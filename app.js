const express=require('express');
const app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

const cors = require('cors');
app.use(cors());

require('dotenv').config();
var dbUrl=process.env.DATABASE_URL 

const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(dbUrl,{useNewUrlParser: true,useUnifiedTopology: true}).then(console.log("MongoDB connected !"))
.catch(err => console.log("Error : " + err));

const methodOverride= require('method-override');
app.use(methodeOverride('_method'));

const server=app.listen(5000, function () {
    console.log("server listening on port 5000");
});