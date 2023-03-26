 const express= require("express");
 const router= express.Router();

const Note = require('./../models/Note');
 
 // //making filtered requests
    // app.get("/notes/list/:userid",async function(req,res){
    //     const notes = await Note.find({userid:req.params.userid});// this method is provided by mongoose package
    //     res.json(notes);
    // });
    //get method ko lagi chai request ko parameter bata arguement fetch garni

    router.post("/list",async function(req,res){
        const notes = await Note.find({userid:req.body.userid});// this method is provided by mongoose package
        res.json(notes);
    });

    // making post request 
    //By default post method doesnt understand any response sent 
    // that is why we use body parser package
    router.post("/add",async function(req,res){
   
        await Note.deleteOne({id:req.body.id});

        const newNote= new Note({
            id:req.body.id,
            userid:req.body.userid,
            title:req.body.title,
            content:req.body.content,
        });
        await newNote.save();//saves data to mongoDb
        const response={message: "New Note Created"};
        res.json(response);

    });
    
    //delete method 
    router.post("/delete",async function(req,res){
   
        await Note.deleteOne({id:req.body.id});
       
        const response={message: "Note Deleted " + `id:${req.body.id}`};
        res.json(response);

    });

module.exports= router;