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
    req.time = new Date().toString();
    next();
}, (req, res)=>{
    res.send({time:req.time});
});

//get route parameters
app.get('/:word/echo', (req, res) => {
    let word = req.params.word;
    res.send({echo:word});
});

app.get('/name', (req, res) => {
    if(req.query != {}){
        res.send({name: req.query.firstname + " " + req.query.lastname});
    }
})




























 module.exports = app;
