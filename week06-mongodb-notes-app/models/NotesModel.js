//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
// Done

const mongoose = require('mongoose');
const options = ["HIGH", "MEDIUM", "LOW"]

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        uppercase: true,
        validate(priority) {
            if (!options.includes(priority)) throw new Error("Priority should be set to HIGH, MEDIUM, or LOW.")
        }
    },
    dateAdded: Date,
    dateUpdated: Date
})


module.exports = mongoose.model("note", noteSchema)