
const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const connectDatabase=require("./src/configs/database")

const app = express()
//database connection
connectDatabase()
// mongoose.connect(DB).then(()=>{
//   console.log(`connection successfull`);
// }).catch((err)=>{
//   console.log("no connection")
// })
   


// user:
// karandp0011
// pass:
// Kp505123


app.use(bodyParser.json({limit: '25mb'}))
app.use(bodyParser.urlencoded({limit: '25mb', extended: false}))
app.use(cors());
app.set("view engine", "ejs");

//Main Route Import
const all_routs=require("./src/routes/studentRoot")

app.use("/api/v1",all_routs)





app.listen(3000,()=>{
  console.log(`server is working on http://localhost:${3000}`)
})
