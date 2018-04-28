const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api_v1')

const app = express();

//Connect to DB
mongoose.connect('mongodb://localhost/dbWeatherService');

//GET request to the homepage
app.get('/',(req, res) =>{
    res.send("GET request to the homepage")
})

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/api',apiRouter)

//start server
app.listen(3003, () => {
    console.log('HOLA Start server on port  3003');
});