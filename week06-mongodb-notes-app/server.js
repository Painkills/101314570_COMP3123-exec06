const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes')

const DB_URL = "mongodb+srv://d4tich:get.me.in@cluster0.qibcjdv.mongodb.net/Week6?retryWrites=true&w=majority"
const PORT_NUM = 8081
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/app", noteRoutes)

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
// DONE
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(PORT_NUM, () => {
    console.log("Server is listening on port", PORT_NUM);
});