const Planet = require('../models/planet-model');
const seedData = require('./planet-seeds.json');
//remove any data from before
Planet.deleteMany({})
    .then(() => {
        //insert data and return it
        return Planet.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        //Close the connection
        process.exit();
    });
