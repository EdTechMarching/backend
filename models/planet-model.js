const mongoose = require('../db/connection');

const PlanetSchema = new mongoose.Schema(
    {
        array: [{
        answer: String,
        selection: [{name: String, image:String}, {name: String, image:String}, {name: String, image: String}],
        hint: [String, String, String]     
        }]
     })

const Planet = mongoose.model('Planet', PlanetSchema);

module.exports = Planet;