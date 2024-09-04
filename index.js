// const http = require("http");
const express = require("express");
const port = 8001;
// const hostName = "localhost";
const app = express();

const router = express.Router();//Router class to create routes like get,post,put,delete


// app.use-> it is a middleware
app.use(express.json());        //important line to convert or accept your payload as json structure.
app.use(express.urlencoded());

// router part
router.get("/",(req,res)=>{
        res.setHeader("content-type",'text/plain');
        res.status(200).send("Hello Prashant, Welcome to Node.JS Journey");
});

router.post("/addemployee",function(req,res){
    const {empName,empPwd}  = req.body;
    res.end(`Hi ${empName}, your password is ${empPwd}`);
});

router.get("/aboutus",(req,res)=>{
    res.send("Welcome to about us page.")
})




// Register router
app.use(router);


app.listen(port,()=>{
    console.log("Server is listening on ",port);
})
