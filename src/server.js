
//Initialization
const express = require('express');
const app =express();


const mongoose= require('mongoose');
const Note= require('./models/Note');

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// The extended option allows to choose between parsing the URL-encoded data with
//  the querystring library (when false) or the qs library (when true).

const mongoDbPath= "mongodb+srv://pranimsingh7:pranim2580@cluster0.scwvxin.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDbPath).then(function(){
    // making get requests
    //get all lists
    app.get("/notes/all-lists",async function(req,res){
        const notes = await Note.find();// this method is provided by mongoose package
        res.json(notes);
    });

    const noteRouter= require('./routes/notesRouter');
   app.use('/notes',noteRouter);
});

// starting the server on a PORT
const PORT = process.env.PORT||5000;
app.listen(PORT,function(){
    console.log("Server is connected to PORT "+`${PORT}`);
});