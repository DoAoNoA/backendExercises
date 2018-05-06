
const axios = require('axios');

async function getWeather(city){
  try{
    const response = await axios.get(`http://localhost:3000/${city}`)
  } catch(err){
    console.log(err);
  }
}

getWeather('dallas'); //Me devuelve una promesa
