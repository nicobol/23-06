//create database
const alldata = {};

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.static('dist'))

app.get('/', (req, res) => {
  console.log(req.body);
  res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
    //console.log(mockAPIResponse)
})


//getting data posted in forecast and saving inside database

// get request to save and sending all datas saved
