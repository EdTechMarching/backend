const express = require('express');
const app = express();
// Start route controllers
const Planet = require('./models/planet-model.js');
// end route controllers

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express MVC app is runnning on port ${port}`);
});