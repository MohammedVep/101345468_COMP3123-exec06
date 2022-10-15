const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
   noteTitle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
   },
   noteDescription: {
    type: String,
    required: true,
    trim: true,
   },
   priority: {
    type: String,
    required: true,
    trim: true,
   },
   dateAdded: {
    type: Date,
    default: Date.now,
   },
   dateUpdated: {
    type: Date,
    default: Date.now,
   }
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated