const express = require('express');
const app = express();
// Start route controllers
const Planet = require('./models/planet-model.js');
app.get('/planets', (req, res) => {
    Planet.find({})
    .then((planets) => {
        res.render('planets/index', { todos });
    })
    .catch(console.error);
})
// end route controllers

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express MVC app is runnning on port ${port}`);
});