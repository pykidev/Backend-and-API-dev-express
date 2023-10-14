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
    const serverTimeZone = 'America/Los_Angeles'; // Oregon West time zone
const clientTimeZone = 'Africa/Nairobi'; // Nairobi time zone

const currentDate = new Date();

// Format the date and time in the client's time zone
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: clientTimeZone,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

const formattedTime = formatter.format(currentDate);
console.log(formattedTime);

const time = formattedTime.match(/\d{2}:\d{2}:\d{2}/)[0];
    req.time = time;
    next();
}, (req, res)=>{
    res.send({time:req.time});
})






























 module.exports = app;
