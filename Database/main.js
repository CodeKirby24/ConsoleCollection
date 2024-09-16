const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017'
const express = require('express');
const cors = require('cors');
const newConsole = require('./ConsoleSchema');

const app = express();

mongoose.connect(server);
app.use(express.json());
app.use(cors());

app.get('/test/consoles/get', async(req, res) => {
    try{
    let data = await newConsole.find();
    res.status(200).json(data);
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Internal Server Error"});
    } finally {
        await mongoose.disconnect(server);
    }
})

app.post('/test/consoles/post', async(req, res) => {
    try{
    let data = await newConsole.create([req.body]);
    res.status(201).json({data});
    } catch(e){
        console.error(e);
        res.status(200).json({error: "Internal Server Error"});
    } finally {
        await mongoose.disconnect(server);
    }
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})