const express = require('express');
const mongoose = require('mongoose');
const noteModel = require('../models/NotesModel.js');
const app = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    try{
        const newNote = new noteModel(req.body);
        const note = await newNote.save();
        res.status(201).send(note);
    } catch (error){
        res.status(400).send(error);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    
    
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (error){
        res.status(400).send(error);
    }
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const findNote = await noteModel.findById(req.params.noteId);
        res.status(201).send(findNote);
    } catch (error) {
        res.status(400).send(error);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.patch('/notes/:noteId', async (req, res) => {
    try {
        const newNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body);
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send(error);
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);
        if(!deletedNote){
            res.status(400).send({message: "No Note to Delete"});
        }
        res.status(201).send(deletedNote);
    } catch (error) {
        res.status(400).send(error);
    }
    
});
module.exports = app;