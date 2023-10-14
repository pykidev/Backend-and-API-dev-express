let express = require('express');
let app = express();

//load environment variables
require('dotenv').config();

//serving static assets
let staticPath = __dirname + "/public";
//mounting the middleware to serve static files
app.use("/public", express.static(staticPath));
// console.log("Hello World");
//methods
app.get("/", (req, res)=>{
    // res.send("Hello Express");
    let indexPath = __dirname + "/views/index.html";
    res.sendFile(indexPath);
});

//json api
app.get("/json", (req, res)=>{
    let response = "Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase"){
    response = response.toUpperCase();
  }

  // Send the response as JSON
  res.json({ "message": response });
});
































 module.exports = app;
