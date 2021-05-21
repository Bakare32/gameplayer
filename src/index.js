const express = require('express');
const app = express ();

const dbSetUp = require('./database/setup');
const playerRoutes = require('./routes/playerRoutes')
const port = 4000;

app.use(express.json());

//Setup DB
dbSetUp()

app.use(playerRoutes)










app.listen(port, function () {
    console.log("server running at port 4000");
})