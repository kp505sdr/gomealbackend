
const server =require("./server")
const connectDatabase=require("./src/configs/database")

//config


//database connection
connectDatabase()
// mongoose.connect(DB).then(()=>{
//   console.log(`connection successfull`);
// }).catch((err)=>{
//   console.log("no connection")
// })
   
server.listen(3000,()=>{
  console.log(`server is working on http://localhost:${3000}`)
})
