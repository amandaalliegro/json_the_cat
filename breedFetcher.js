const request = require('request');
const breed = process.argv[2];

if (breed === undefined) {
  console.log("provide a breed");
  process.exit();
}
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
    if (error) {
      console.log(error);
      process.exit();
    }
 
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`Breed not found.`);
    }
  });
};

module.exports = { fetchBreedDescription };