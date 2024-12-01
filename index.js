let express = require('express');
let app = express();

app.get("/",(req,res)=>{
    res.send("hrlloev vorlfd");
})




app.listen(3030,()=>{
    console.log("listening")
})
