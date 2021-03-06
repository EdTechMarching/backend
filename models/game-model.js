const mongoose = require('../db/connection');
const Question = require('./question-model');
const GameSchema = new mongoose.Schema({
	question: [Question]
    
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
