let express = require('express');
let app = express();
// console.log("Hello World");
//methods
app.get("/", (req, res)=>{
    // res.send("Hello Express");
    let indexPath = __dirname + "/views/index.html";
    res.sendFile(indexPath);
});

































 module.exports = app;
