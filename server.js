const express = require('express');
const notesRoutes = require('./routes/NoteRoutes')
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://101345468:miwkit-jokpij-7gYcko@exec06.v7qkejg.mongodb.net/exec6?retryWrites=true&w=majority"
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/", notesRoutes);

// TODO - Update your mongoDB Atals Url here to Connect to the database
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


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});