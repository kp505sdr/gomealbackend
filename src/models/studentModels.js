const  mongoose=require("mongoose")



const studentSchema=new mongoose.Schema({

   productname:{
      type:String,
      required:[true,"Please Enter The Product Name"]
     },
     price:{
      type:Number,
      require:[true,"Please Enter Price"],
      minLength: 1,
      maxLength: 5
     },
     rating:{
      type:Number,
      require:[true,"Please Enter Rating"],
      minLength: 0,
      maxLength: 5
     },
     offer:{
      type:Number,
     },
     dsc:{
      type:String,
     },
     imgurl:{
      type:String
     },
     productimage:{
      type:String
  },
  
   createdAt:{
type:Date,
default:Date.now
   }
})

module.exports=mongoose.model("Student",studentSchema)