const express = require("express")
const seeder = require("../seeds/seeder")
const questionRouter = express.Router()
const Question = require("../models/question-model.js")

// routes
questionRouter.get("/", (req, res) => {
	Question.find({}, (err, found) => {
		res.json(found)
	})
})

questionRouter.post("/", (req, res) => {
	Question.create(req.body, (err, created) => {
		res.json(created)
	})
})

// seed routes
questionRouter.get("/seed", (req, res) => {
	Question.create(seeder, (err, created) => {
		res.json(created)
	})
})
module.exports = questionRouter
