const express = require("express")
require("dotenv").config()
const seeder = require("../seeds/seeder")
const questionRouter = express.Router()
const Question = require("../models/question-model.js")

const { SEED } = process.env

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
questionRouter.get(`/${SEED}`, (req, res) => {
	Question.create(seeder, (err, created) => {
		res.json(created)
	})
})
module.exports = questionRouter
