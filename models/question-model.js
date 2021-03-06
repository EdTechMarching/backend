const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
	answer: [String],
	selection: [String],
	hint: [String],
	popupImage: String,
	popupRight: [String],
	popupBelow: String
})

const Question = mongoose.model("Question", QuestionSchema)

module.exports = Question
