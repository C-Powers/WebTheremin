const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
//const _ = require('lodash');


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

let port = 3000;
app.listen(process.env.PORT || port); //for heroku shenanigans 
console.log('http://localhost:' + port.toString() + '/');
