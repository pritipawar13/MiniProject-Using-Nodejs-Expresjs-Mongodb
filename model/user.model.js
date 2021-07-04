const mongoose=require('mongoose')
const Joi=require('joi');
const Schema= mongoose.Schema;
//const bcrypt=require('bcrypt')


const Userschema=new mongoose.Schema({
    name:{
    type:String,
    minlength:5,
    maxlenfth:50,
    //required:true
},
lastname:{
    type:String,
    minlength:5,
    maxlenfth:50,
    //required:true
},
email:{
    type:String,
    required:true,
    minlength:5,
    maxlength:255,
    lowercase:true
},
password:{
    type:String,
    minlength:5,
    maxlength:20,
    required:true
}
})
// To set hash password and store that password into database.
/*
Userschema.pre('save',async function(next){
    try{
       // console.log("called before saving a user")
       const salt=await bcrypt.genSalt(10);
       //console.log(this.name,this.lastname,this.email,this.password)
       const hashedpassword=await bcrypt.hash(this.password,salt);
       this.password=hashedpassword;
       next()
    }catch(error){
        next(error)
    }

})

Userschema.post('save',async function(next){
    try{
        console.log("called after saving a user")
    }catch(error){
        next(error)
    }

})
*/
const User=mongoose.model('User',Userschema)
module.exports=User
