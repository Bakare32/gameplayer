const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    title: String,
    name: String,
    age: Number,
    ability: Number,
    level: Number
})

const gamePlayer = mongoose.model('gamePlayer', gameSchema);

module.exports = gamePlayer;