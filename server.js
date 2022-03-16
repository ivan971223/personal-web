import express from 'express'
import mongoose from 'mongoose'
import mongodb from 'mongodb'
import MongoClient from 'mongodb'
import cors from 'cors'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//app config
const app = express();
const DB = 'mongodb+srv://admin:a92001520@cluster0.b15y2.mongodb.net/contact?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('./build'));

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology:true})

const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}

//create a data schema
const notesSchema = {
    name: String,
    email: String,
    message: String,
    timestamp: String
}

const Note = mongoose.model("Note", notesSchema); 


app.post('/upload', (req, res) => {
    let newNote = new Note({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message,
        timestamp: Date.now()
    })
    newNote.save();
    console.log("uploaded");
    res.redirect('https://louis-website-heroku.herokuapp.com/');
})



app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
}) 