
const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const server = express()
// user:
// karandp0011
// pass:
// Kp505123


server.use(bodyParser.json({limit: '25mb'}))
server.use(bodyParser.urlencoded({limit: '25mb', extended: false}))
server.use(cors());
server.set("view engine", "ejs");

//Main Route Import
const all_routs=require("./src/routes/studentRoot")

server.use("/api/v1",all_routs)

module.exports=server