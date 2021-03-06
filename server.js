const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const questionRouter = require("./controllers/question-router")

// Config + Connect/////////////////////////////////////////////////////////////////////////
require("dotenv").config()
const app = express()
app.use(cors())
const PORT = 4000
const { MONGODB_URI } = process.env

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log("STARTED MONGODB"))
	.catch(e => console.log("DISASTER\n", e))

app.listen(PORT, () => console.log("STARTED PORT:", PORT))

// Middleware + Engine /////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routers ///////////////////////////////////////////////////////////////////////////////
app.use("/questions", questionRouter)
