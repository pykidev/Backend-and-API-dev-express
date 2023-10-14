let express = require('express');
let app = express();

//serving static assets
let staticPath = __dirname + "/public";
//mounting the middleware to serve static files
app.use(staticPath, express.static);
// console.log("Hello World");
//methods
app.get("/", (req, res)=>{
    // res.send("Hello Express");
    let indexPath = __dirname + "/views/index.html";
    res.sendFile(indexPath);
});

































 module.exports = app;
