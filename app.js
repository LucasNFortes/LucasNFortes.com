require("dotenv").config();
const cors = require("cors");

const express = require("express");
const path = require("path");
const app = new express();
app.use(express.static(path.join(__dirname, "/")));
app.listen(4000, () => {  
    console.log("Server running on 4000");
});

app.use(cors());
