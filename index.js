const express = require('express');
const app = express();
// Start route controllers
const Question = require('./models/question-model.js');
app.get('/questions', (req, res) => {
	Question.find({}, (err, found) => {
		res.json(found);
	});
});
app.post('/questions', (req, res) => {
	Question.create(req.body, (err, created) => {
		Question.find({}, (err, found) => {
			res.json(found);
		});
	});
});
// end route controllers

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express MVC app is runnning on port ${port}`);
});