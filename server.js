const express = require('express');
const app = express();
const port = '3001';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

import eventsRoutes from './routes/events';
import placesRoutes from './routes/placesRoutes';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(eventsRoutes);
app.use(placesRoutes);


mongoose.connect('mongodb://localhost/legriffe', {useMongoClient: true});
global.Promise = require("bluebird");

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});