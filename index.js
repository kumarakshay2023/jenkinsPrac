let express = require('express');
let app = express();

app.get("/",(req,res)=>{
    res.send("hrlloev vorlfd");
})

app.get("/address",(req,res)=>{
    res.send("Hiii");
})




app.listen(3030,()=>{
    console.log("listening")
})
