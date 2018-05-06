const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mydb', ['cities']);
var db = mongojs('mydb', ['mycollection'])

db.cities.find(function (err, docs) {

    async function getWeather(docs) {

        try {
            let promises = docs.map(function(doc, index, array) {
            const city = doc.name;  
            return axios.get(`http://localhost:3000/${city}`);
            //Revisar linea 11, 12, 13, 
            });
            
            let myArray= await Promise.all(promises);
            myArray.forEach((element) => {
            console.log(element.data)
            });
        } catch (e) {
            console.error(e);
        }
      }      
      getWeather(docs);
});
