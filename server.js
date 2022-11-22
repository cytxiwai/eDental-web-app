const express = require('express');

//set up server
const app = express();

require('dotenv').config()
const dbConfig = require("./config/dbConfig");


//select port
const port = process.env.PORT || 4000;


app.listen(port, () => console.log(`listening on port ${port}`));