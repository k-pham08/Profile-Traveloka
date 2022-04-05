require("dotenv").config();
const express = require("express"),
	cookieParser = require("cookie-parser"),
	path = require("path");

// config port
const PORT = process.env.PORT || 5000;

// init app
const app = express();

// type content used
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// public folder

// config signed cookie

// config routers

// set up view engine

// middleware error 404

// host server
app.listen(PORT, function () {
	console.log("server start at port 3000");
});
