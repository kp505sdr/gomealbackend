const dotenv=require("dotenv")
const app =require("./app")
const connectDatabase=require("./src/configs/database")

//config
dotenv.config({path:"src/configs/config.env"})

//database connection
connectDatabase()
// mongoose.connect(DB).then(()=>{
//   console.log(`connection successfull`);
// }).catch((err)=>{
//   console.log("no connection")
// })
   
app.listen(3000,()=>{
  console.log(`server is working on http://localhost:${3000}`)
})
