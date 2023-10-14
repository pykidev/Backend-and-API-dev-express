let express = require('express');
let app = express();

//load environment variables
require('dotenv').config();

//serving static assets
let staticPath = __dirname + "/public";
//mounting the middleware to serve static files
app.use("/public", express.static(staticPath));
// console.log("Hello World");
//custpm middleware root logger
function simple_logger(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
}

app.use(simple_logger);

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

app.get("/now", (req, res, next) => {
    let timeString = new Date().toString();
    const time = timeString.match(/\d{2}:\d{2}:\d{2}/)[0];
    req.time = time;
    next();
}, (req, res)=>{
    res.send({time:req.time});
})






























 module.exports = app;
