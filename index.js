// const http = require("http");
const express = require("express");
const routes = require("./routes/routes"); //importing routes file and mount this routes file with router
const port = 8001;
// const hostName = "localhost";
const app = express();

const router = express.Router();//Router class to create routes like get,post,put,delete

routes(router); //mounting routes with router

// app.use-> it is a middleware
app.use(express.json());  //important line to convert or accept your payload as json structure.
app.use(express.urlencoded({extended:false}));

// Register router
app.use(router);

app.listen(port,()=>{
    console.log("Server is listening on ",port);
})
