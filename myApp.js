let express = require('express');
let app = express();
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
  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';

  // Define the message based on the MESSAGE_STYLE variable
  const message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';

  // Create the response object
  const responseObject = { message };

  // Send the response as JSON
  res.json(responseObject);
});
































 module.exports = app;
