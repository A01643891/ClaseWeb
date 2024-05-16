const express = require('express')
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express()
const port = 3000

//routes
const userRoutes = require("./routes/userRoutes");

//express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//testing
app.get("/", (req,res) =>{
    res.json({info: "Hello World"});
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});

//endpoints
app.use("/users", userRoutes);