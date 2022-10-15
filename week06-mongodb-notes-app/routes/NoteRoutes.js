const express = require('express')
const NoteModel = require('../models/NotesModel');
const app = express.Router()

//TODO - Create a new Note
// DONE
app.post('/notes', async (req, res) => {
    console.log(req.body)
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const newNote = new NoteModel(req.body)
        await newNote.save()
        res.status(200).send({
            created_note: newNote
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

//TODO - Retrieve all Notes
// DONE
app.get('/notes', async(req, res) => {
    try {
        const allNotes = await NoteModel.find()
        res.status(200).send({
            all_notes: allNotes
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
    
});

// TODO - Retrieve a single Note with noteId
// DONE
app.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const locatedNote = await NoteModel.findById(req.params.noteId)
        res.status(200).send({
            retrieved_note: locatedNote
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

//TODO - Update a Note with noteId
// DONE
app.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const updatedNote = await NoteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(200).send({
            updated_note: updatedNote
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

//TODO - Delete a Note with noteId
// DONE
app.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const deletedNote = await NoteModel.findByIdAndDelete(req.params.noteId)
        res.status(200).send({
            deleted_note: deletedNote
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

module.exports = app