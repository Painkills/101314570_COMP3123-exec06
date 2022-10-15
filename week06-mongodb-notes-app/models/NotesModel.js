const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: Enumerator<String>["HIGH", "MEDIUM", "LOW"],
    dateAdded: Date,
    dateUpdated: Date
})



//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated