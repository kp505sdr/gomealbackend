const mongoose=require("mongoose")

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://karandp0011:Kp505123@gomealproject.xwjtmpg.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology:true}).then((data)=>{
        console.log(`mongodb connected with server: ${data.connection.host}`)
        }).catch((err)=>{
            console.log(err)
        })  
}
module.exports=connectDatabase