const express = require("express")
const questionRouter = express.Router()
const Question = require("../models/question-model.js")

// question router
questionRouter.get("/", (req, res) => {
	Question.find({}, (err, found) => {
		res.json(found)
	})
})

questionRouter.post("/", (req, res) => {
	Question.create(req.body, (err, created) => {
		Question.find({}, (err, found) => {
			res.json(found)
		})
	})
})
module.exports = questionRouter
