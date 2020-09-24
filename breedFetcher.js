const request = require('request');
const breed = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw error;
  }
 
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Breed not found.`);
  }
}); 

