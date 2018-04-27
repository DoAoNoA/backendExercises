const express = require('express');

const app = express();

//GET request to the homepage
app.get('/',(req, res) =>{
    res.send("GET request to the homepage")
})

//start server
app.listen(3003, () => {
    console.log('Start server on port 3003');
});